# Supply Chain Security Audit
## dyslexia-support-skill v1.2.0 — Sixth-Pass Re-Audit

**Audit Date**: 2026-04-16
**Repo**: `D:\dyslexia-support-skill`
**Commit**: `34b99356`
**Audit Type**: Re-audit (v1.1.0 baseline → v1.2.0 delta)

---

## Summary

| Metric | v1.1.0 Baseline | v1.2.0 Current | Change |
|--------|-----------------|-----------------|--------|
| SLSA Level | L1+ | L1+ | unchanged |
| CRITICAL issues | 0 | 0 | — |
| HIGH issues | 0 | 0 | — |
| MEDIUM issues | 0 | 0 | — |
| LOW issues | 2 | 3 | **+1** (SBOM timestamp) |
| Dependencies (prod) | 0 | 0 | — |
| Dependencies (dev) | 6 | 6 | — |
| SBOM format | CycloneDX 1.6 | CycloneDX 1.6 | — |
| Lockfile | ✅ present | ✅ present | — |

**Result: PASS** — Supply chain posture unchanged from v1.1.0. One new LOW (SBOM timestamp staleness) tracked for next cycle.

---

## Dependency Inventory

### Production Dependencies
```
(none — this is a build tool + skill distribution package)
```

### Dev Dependencies (6, unchanged since v1.1.0)

| Package | Range | Role |
|---------|-------|------|
| `@types/node` | `^20.0.0` | TypeScript types |
| `@types/js-yaml` | `^4.0.5` | TypeScript types |
| `glob` | `^10.0.0` | File globbing in build.ts |
| `js-yaml` | `^4.1.0` | YAML parsing in build.ts |
| `typescript` | `^5.0.0` | Build toolchain |
| `tsx` | `^4.0.0` | TypeScript execution |

**Assessment**: All dev dependencies pinned via `package-lock.json`. No production attack surface.

### MCP Server Build Output (regenerated at dist/mcp-server/package.json)

| Package | Range | Notes |
|---------|-------|-------|
| `@modelcontextprotocol/sdk` | `^1.6.0` | Post-ReDoS-fix version (CVE GHSA-8r9q-7v3j-jr4g resolved) |
| `zod` | `^3.22.4` | Input validation |
| `@types/node`, `typescript`, `tsx` | (standard) | Dev only |

---

## CI/CD Pipeline

Existing `.github/workflows/ci.yml` unchanged. Verified checks:

| Hardening Control | Status |
|-------------------|--------|
| Pinned action versions (not `@main`) | ✅ Uses `@v4` pins |
| Node.js matrix (18/20/22) | ✅ |
| `npm ci` (uses lockfile, not `npm install`) | ✅ |
| Build verification before deploy | ✅ |
| Test verification | ✅ |
| No secrets exposed in logs | ✅ No secrets used |
| Permissions scoped (`permissions: contents: read`) | ✅ |
| Dependabot enabled | ⏳ Toggle in GitHub Settings (pending confirmation) |
| Secret scanning enabled | ⏳ Toggle in GitHub Settings (pending confirmation) |
| Code scanning enabled | ⏳ Toggle in GitHub Settings (pending confirmation) |

---

## SBOM

| Attribute | Value |
|-----------|-------|
| Location | `sbom.cdx.json` |
| Format | CycloneDX 1.6 |
| Last generated | 2026-04-15 16:20 |
| Current commit date | 2026-04-16 04:43 |
| **Drift** | **~12 hours stale** (LOW — see finding below) |

---

## SLSA Level Assessment

| Level | Requirement | Status |
|-------|-------------|--------|
| L1 | Build produced via scripted process, provenance available | ✅ `build.ts`, `npm run build` |
| L1 | Build is reproducible given same source | ✅ Deterministic build |
| **Current: L1+** | | |
| L2 | Hosted build service | ⏳ Not applicable (GitHub Actions runs on every push via CI) |
| L2 | Signed provenance | ❌ No provenance attestation generated |
| L3 | Hardened builder | ❌ GitHub-hosted runner (not hardened) |
| L4 | Two-person review | ❌ Single-developer project |

**Recommended next step for L2**: Generate SLSA provenance attestations via the [SLSA generator GitHub Action](https://github.com/slsa-framework/slsa-github-generator). Low effort, incremental gain.

---

## Findings

### LOW-SC-1: SBOM Timestamp Drift (NEW in v1.2.0)
- **Frameworks**: NIST SP 800-218A, EU AI Act Art. 25
- **Description**: `sbom.cdx.json` was last generated 2026-04-15 (before v1.2.0 content changes). While no dependencies changed, the SBOM metadata (project name, version, description) is now stale relative to `package.json` v1.2.0.
- **Impact**: Minimal — dependency graph is accurate. Project metadata in SBOM does not match current package.json.
- **Effort**: S (1 min)
- **Remediation**: Run `npm run sbom` and commit. This regenerates SBOM with current v1.2.0 metadata.

### LOW-SC-2: Dev Dependency Ranges Use Caret (carried from v1.1.0)
- **Frameworks**: NIST SP 800-218A
- **Description**: All devDependencies use `^x.y.z` ranges.
- **Status**: ACCEPTED RISK (lockfile pins actual versions, dev-only exposure)

### LOW-SC-3: No Signed Commits (carried from v1.1.0)
- **Frameworks**: SLSA L2+ expects signed commits
- **Description**: Git commits not GPG-signed.
- **Status**: ACCEPTED RISK (single-developer, hardened GitHub account with 2FA)

---

## Package.json Hardening Checks

| Check | Status |
|-------|--------|
| `"private": true` (prevents accidental npm publish) | ✅ |
| `engines.node` specified | ✅ `>=18.0.0` |
| No `"bin"` script exposing CLI to PATH by default | ✅ |
| No `"postinstall"` script (install-time code execution) | ✅ |
| `prepack` script only does `npm run build` (safe) | ✅ |
| No `"scripts"` calling remote code (`curl \| bash`, etc.) | ✅ |

---

## Repository Hygiene

| Check | Status |
|-------|--------|
| `.gitignore` excludes `node_modules/`, `dist/` | ✅ |
| `.gitignore` does NOT exclude `package-lock.json` | ✅ (lockfile committed) |
| `.gitignore` excludes `.claude/` | ✅ |
| `SECURITY.md` present with disclosure policy | ✅ |
| `CONTRIBUTING.md` present | ✅ |
| `LICENSE` present (MIT) | ✅ |
| `CODEOWNERS` | ❌ Not present (single-developer project, low value) |

---

## Supply Chain Framework Compliance

| Framework | Compliance |
|-----------|------------|
| **NIST SP 800-218A** (Secure Software Development) | PARTIAL — Lockfile, SBOM, CI gating; missing signed commits |
| **SLSA v1.0** | **L1+** — Scripted build, reproducible; signed provenance absent |
| **OWASP Dependency Check** | PASS — 0 known vulnerable dependencies |
| **EU AI Act Art. 25** (Risk management) | PASS — Risk register in audit reports; remediation workflow documented |
| **ISO 27001 A.15** (Supplier relationships) | PASS — Minimal supplier surface (0 prod deps) |

---

## Delta Summary

v1.2.0 is a **content release**, not a supply-chain-affecting release. Zero dependency changes. The only supply chain item tracked is the SBOM timestamp drift (LOW-SC-1), which is a 1-minute fix.

---

## Recommendations

**Immediate (this release)**
1. Regenerate SBOM: `npm run sbom` → commit. Closes LOW-SC-1.

**Next cycle (v1.3.0 or infrastructure pass)**
2. Add SLSA provenance via `slsa-github-generator` Action → SLSA L2
3. Enable GitHub Dependabot (Settings → Code security)
4. Enable GitHub Secret Scanning (Settings → Code security)
5. Enable GitHub Code Scanning / CodeQL (Settings → Code security)
6. Enable GPG commit signing → closes LOW-3 from SAST report
