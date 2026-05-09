# CWE Mapping Report
## dyslexia-support-skill v1.2.0 — Sixth-Pass Re-Audit

**Report Date**: 2026-04-16
**Commit**: `34b99356`
**Audit Type**: Re-audit (v1.1.0 baseline → v1.2.0 delta)
**Frameworks**: OWASP Top 10 2021, OWASP LLM Top 10 2025, NIST SP 800-53, EU AI Act Art. 25, ISO 27001, SOC 2, MITRE ATT&CK, MITRE ATLAS

---

## Summary

| Metric | v1.1.0 Baseline | v1.2.0 Current | Change |
|--------|-----------------|-----------------|--------|
| Total CWEs tracked | 7 | 7 | — |
| RESOLVED (security fixes) | 3 | 3 | — |
| ACCEPTED RISK | 3 | 3 | — |
| OPEN (actionable) | 1 (LOW) | 1 (LOW) | — |
| NEW | 0 | 0 | — |

**Result: PASS** — No new CWEs introduced by v1.2.0. All findings carried forward from prior audit.

---

## Remediation Status (from v1.1.0)

| CWE | Finding | Severity | Status |
|-----|---------|----------|--------|
| CWE-1333 | MCP SDK ReDoS vulnerability | HIGH | ✅ RESOLVED — SDK ^0.6.0 → ^1.6.0 |
| CWE-704 | TypeScript type predicate errors | LOW | ✅ RESOLVED — index signatures added |
| CWE-710 | tsconfig rootDir mismatch | LOW | ✅ RESOLVED — rootDir corrected |
| CWE-22 | Path traversal in MCP loader | LOW | ⚠️ ACCEPTED RISK — developer-controlled input |
| CWE-1357 | Caret dependency ranges | LOW | ⚠️ ACCEPTED RISK — lockfile mitigates |
| CWE-345 | No signed commits | LOW | ⚠️ ACCEPTED RISK — single developer |
| CWE-502 | JSON.parse on local manifest | INFO | ⚠️ ACCEPTED RISK — local build tool |

---

## Active CWE Detail

### CWE-22: Improper Limitation of a Pathname to a Restricted Directory
- **Source**: SAST scan, LOW-1
- **Location**: `dist/mcp-server/src/knowledge/loader.ts`
- **Pattern**: String concatenation with `skillId` in file path
- **Risk level**: LOW — `skillId` sourced from `manifest.json` (developer-authored), never user input
- **Status**: ACCEPTED RISK

### CWE-345: Insufficient Verification of Data Authenticity
- **Source**: Supply chain audit, LOW-SC-3
- **Description**: Git commits not GPG-signed
- **Risk level**: LOW — single-developer project, GitHub 2FA active
- **Status**: ACCEPTED RISK

### CWE-502: Deserialization of Untrusted Data
- **Source**: SAST scan, INFO-1
- **Location**: `build.ts` line ~154
- **Pattern**: `JSON.parse(readFileSync(manifestPath, "utf-8"))`
- **Risk level**: INFO — local file, build-time only, never network-exposed
- **Status**: ACCEPTED RISK

### CWE-1357: Reliance on Insufficiently Trustworthy Component
- **Source**: Supply chain audit, LOW-SC-2
- **Description**: Caret version ranges on devDependencies
- **Risk level**: LOW — `package-lock.json` committed, no production dependencies
- **Status**: ACCEPTED RISK

---

## Compliance Framework Cross-Reference

### OWASP Top 10 2021

| Category | CWE Mapping | Status |
|----------|-------------|--------|
| A01 Broken Access Control | CWE-22 (path traversal) | ACCEPTED RISK (LOW) |
| A02 Cryptographic Failures | — | N/A (no crypto operations) |
| A03 Injection | — | PASS (no injection surfaces) |
| A04 Insecure Design | — | PASS |
| A05 Security Misconfiguration | CWE-710 (tsconfig) | ✅ RESOLVED |
| A06 Vulnerable Components | CWE-1333 (MCP SDK ReDoS) | ✅ RESOLVED |
| A07 Identification & Auth | — | N/A (no auth system) |
| A08 Software & Data Integrity | CWE-345 (unsigned commits), CWE-502 (JSON.parse), CWE-1357 (caret deps) | ACCEPTED RISK |
| A09 Security Logging | — | N/A (build tool) |
| A10 Server-Side Request Forgery | — | PASS (no outbound requests) |

### OWASP LLM Top 10 2025

| Category | Mapping | Status |
|----------|---------|--------|
| LLM01 Prompt Injection | — | N/A (skill provides knowledge, no prompt routing) |
| LLM02 Insecure Output Handling | — | PASS (MCP tools return JSON with validated schemas) |
| LLM03 Training Data Poisoning | — | N/A (content is expert-authored, not training data) |
| LLM04 Model Denial of Service | — | N/A (no model hosting) |
| LLM05 Supply Chain Vulnerabilities | CWE-1333 (RESOLVED), CWE-1357 (ACCEPTED) | PASS |
| LLM06 Sensitive Information Disclosure | — | PASS (no PII in templates — bracketed placeholders only) |
| LLM07 Insecure Plugin Design | CWE-22 (path traversal) | ACCEPTED RISK (LOW) |
| LLM08 Excessive Agency | — | PASS (tools are read-only knowledge retrieval) |
| LLM09 Misinformation | — | PASS (clinical/legal claims cite DSM-5, ICD-11, IDEA, ADA) |
| LLM10 Unbounded Consumption | — | PASS (no resource-intensive operations) |

### NIST SP 800-53 (Selected Controls)

| Control | CWE Mapping | Status |
|---------|-------------|--------|
| RA-3 Risk Assessment | All CWEs categorized | PASS |
| SA-11 Developer Testing | CWE-704, CWE-710 remediated via tests | ✅ RESOLVED |
| SC-28 Protection of Info at Rest | CWE-502 (local JSON parse) | ACCEPTED RISK |
| SI-10 Information Input Validation | CWE-22 | ACCEPTED RISK (Zod validates MCP input) |
| CM-7 Least Functionality | CWE-1357 (caret deps) | ACCEPTED RISK |

### EU AI Act Art. 25

| Requirement | Mapping | Status |
|-------------|---------|--------|
| Risk management | All CWEs tracked and classified | PASS |
| Technical documentation | SBOM, audit trail | PASS |
| Transparency | AI contribution disclosed | PASS |
| Human oversight | User-invoked tools only | PASS |

### ISO 27001 (Annex A)

| Control | Mapping | Status |
|---------|---------|--------|
| A.8.9 Configuration management | CWE-710 | ✅ RESOLVED |
| A.8.11 Data masking | No PII exposure | PASS |
| A.15 Supplier relationships | CWE-1333, CWE-1357 | PASS (resolved/mitigated) |
| A.16 Incident management | Remediation workflow documented | PASS |

### SOC 2

| Criteria | Mapping | Status |
|----------|---------|--------|
| CC6.1 Access controls | CWE-22 (path limitation) | ACCEPTED RISK |
| CC6.7 Data classification | No sensitive data in outputs | PASS |
| CC7.3 Incident response | Audit-fix-reaudit workflow | PASS |

### MITRE ATT&CK

| Technique | CWE Mapping | Status |
|-----------|-------------|--------|
| T1059 Command/Script Execution | — | PASS (no eval/exec/spawn) |
| T1190 Exploit Public App | CWE-1333 (ReDoS) | ✅ RESOLVED |
| T1195 Supply Chain Compromise | CWE-1357 | ACCEPTED RISK (lockfile) |

### MITRE ATLAS

| Technique | Mapping | Status |
|-----------|---------|--------|
| AML.T0010 ML Supply Chain Compromise | CWE-1357 | ACCEPTED RISK |
| AML.T0016 Obtain Capabilities | — | N/A (no model deployment) |
| AML.T0043 Craft Adversarial Data | — | N/A (content is expert-curated) |

---

## Aggregate Compliance Matrix

| Framework | Pass | Accepted Risk | Fail | Coverage |
|-----------|------|---------------|------|----------|
| OWASP Top 10 2021 | 7 | 3 | 0 | 10/10 |
| OWASP LLM Top 10 2025 | 8 | 2 | 0 | 10/10 |
| NIST SP 800-53 | 3 | 2 | 0 | 5/5 assessed |
| EU AI Act Art. 25 | 4 | 0 | 0 | 4/4 |
| ISO 27001 | 3 | 1 | 0 | 4/4 assessed |
| SOC 2 | 2 | 1 | 0 | 3/3 assessed |
| MITRE ATT&CK | 2 | 1 | 0 | 3/3 assessed |
| MITRE ATLAS | 1 | 1 | 0 | 2/3 applicable |

**Overall: 30 PASS / 11 ACCEPTED RISK / 0 FAIL across 8 frameworks**

---

## v1.2.0 Delta Analysis

v1.2.0 introduced no new executable code paths, no new dependencies, and no changes to the MCP server template logic. The release consists entirely of:

- Expanded Markdown content in `source/skills/` (clinical frameworks, ADA coverage, document templates)
- Enriched JSON metadata in `source/manifest.json` and `plugin.json` (descriptions, keywords, parameter enums)
- Updated `README.md` (prose reframing)
- Regenerated `dist/` via unchanged `build.ts`

**No new CWEs introduced. No existing CWE risk levels changed.**

---

## Recommendations

1. **Enable GPG commit signing** → Closes CWE-345
2. **Add path allowlist in MCP loader** → Hardens CWE-22 (defense in depth, not required)
3. **Pin exact devDependency versions** → Closes CWE-1357 (lockfile already mitigates)
4. **Regenerate SBOM** → Not a CWE, but aligns SBOM metadata with v1.2.0 version
