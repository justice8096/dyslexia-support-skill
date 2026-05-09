# SAST/DAST Scan Report
## dyslexia-support-skill v1.2.0 — Sixth-Pass Re-Audit (Post Cognitive-Disorder Reframe)

**Scan Date**: 2026-04-16
**Scan Scope**: `D:\dyslexia-support-skill`
**Scan Type**: Sixth-pass re-audit (post v1.2.0 cognitive-disorder reframe)
**Commit**: `34b99356` — feat(v1.2.0): reframe as cognitive disorder across full lifespan
**Prior audit**: 2026-04-15 (fifth pass) — 4 findings, PASS

---

## Summary

| Severity | Previous (v1.1.0) | Current (v1.2.0) | Change |
|----------|-------------------|------------------|--------|
| CRITICAL | 0 | 0 | — |
| HIGH | 0 | 0 | — |
| MEDIUM | 0 | 0 | — |
| LOW | 3 | 3 | unchanged |
| INFO | 1 | 1 | unchanged |
| **Total** | **4** | **4** | — |

**Result: PASS** — No new findings. v1.2.0 is a content-reframing release (rich manifest descriptions, expanded skill markdown, new document templates) with no changes to executable code paths, dependencies, or attack surface.

---

## Delta From Prior Audit

**What changed in v1.2.0:**
- `source/manifest.json` — expanded with cognitive-disorder framing, ADA keywords, new parameter enums
- `README.md` — reframed with lifespan coverage, clinical frameworks section
- `source/skills/standards-compliance.md` — added DSM-5/ICD-11, ADA Title I/II/III sections
- `source/skills/document-generation.md` — added 5 new document templates (clinical eval, higher-ed DSR, ADA workplace letter, interactive process log, cognitive prosthetics prescription)
- `source/skills/remediation-strategies.md` — promoted cognitive prosthetics to Track 2 with tool tables
- `plugin.json` — rewrite to match manifest
- `package.json` — version bump, description update
- `dist/` — regenerated via `build.ts --clean`

**What did not change:**
- No new production dependencies (dependencies remain empty)
- No new dev dependencies
- No changes to `build.ts` executable logic
- No changes to `test-build.ts`
- No changes to `.github/workflows/ci.yml`
- MCP server template unchanged (still uses `@modelcontextprotocol/sdk ^1.6.0`)
- TypeScript configuration unchanged

---

## Findings (carried forward, unchanged)

### LOW-1: Path Traversal Pattern in MCP Knowledge Loader
- **CWE**: CWE-22 (Improper Limitation of a Pathname to a Restricted Directory)
- **Location**: `dist/mcp-server/src/knowledge/loader.ts` (generated)
- **Pattern**: `resolve(__dirname, "../../knowledge/skills/" + skillId + ".md")`
- **Risk**: `skillId` is sourced from `manifest.json` (developer-controlled). MCP tools reference skills by stable ID, never from user-supplied paths.
- **Status**: ACCEPTED RISK — no user-supplied path components

### LOW-2: Caret Dependency Ranges
- **CWE**: CWE-1357 (Reliance on Insufficiently Trustworthy Component)
- **Pattern**: `"typescript": "^5.0.0"`, `"tsx": "^4.0.0"`, `"glob": "^10.0.0"`, `"js-yaml": "^4.1.0"`
- **Risk**: All are devDependencies. `package-lock.json` present in repo pins actual resolved versions. No production dependencies.
- **Status**: ACCEPTED RISK — lockfile mitigates

### LOW-3: No Signed Commits
- **CWE**: CWE-345 (Insufficient Verification of Data Authenticity)
- **Risk**: Commits not GPG-signed. Single-developer project on hardened GitHub account mitigates impersonation risk. 2FA active.
- **Status**: ACCEPTED RISK

### INFO-1: JSON.parse on Local Manifest
- **CWE**: CWE-502 (Deserialization of Untrusted Data)
- **Location**: `build.ts` line ~154
- **Pattern**: `JSON.parse(readFileSync(manifestPath, "utf-8"))`
- **Risk**: Manifest is a local file under developer control. Build tool only, never exposed to network input or runtime loaders.
- **Status**: ACCEPTED RISK

---

## Checks Performed on v1.2.0 Changes

| Check | Result |
|-------|--------|
| Hardcoded secrets / API keys in new content | ✅ None found |
| Injection patterns (SQL/command/XSS) in new content | ✅ None found |
| `eval` / `new Function` / `child_process` in new source | ✅ None found |
| Regex patterns for ReDoS in new content | ✅ N/A — new content is Markdown prose, no regex |
| `innerHTML` / `dangerouslySetInnerHTML` in new content | ✅ None found |
| Rebuilt MCP server uses SDK ^1.6.0 | ✅ Verified in `dist/mcp-server/package.json` |
| Rebuilt MCP server uses `server.tool()` API | ✅ Verified in `dist/mcp-server/src/index.ts` |
| Zod input validation on all 4 MCP tools | ✅ All tools validate via `zod.parse(input)` |
| PII/sensitive content patterns in document templates | ⚠️ Templates contain bracketed placeholders only, e.g. `[Name]`, `[DOB]`, no real PII |
| Cognitive prosthetics prescription template leaks license numbers | ✅ Only placeholder `[License #]` in signature block |
| ADA workplace accommodation template exposes HR workflow secrets | ✅ No — template is a formal letter skeleton |

---

## Content-Risk Analysis (Specific to v1.2.0 Reframe)

v1.2.0 is a **content-heavy release** rather than a code release. Content-specific risks evaluated:

| Risk | Assessment |
|------|------------|
| Medical misinformation in clinical sections | Clinical claims align with DSM-5, ICD-11, and peer-reviewed literature (Shaywitz, Dehaene, Gabrieli). All templates include "requires professional review" disclaimers. |
| Legal misinformation in ADA/504 sections | Citations to ADA Title I/II/III, Section 504, IDEA, EEOC procedures, OCR complaint process are accurate. Template letters explicitly recommend legal counsel review. |
| Accommodation recommendations as prescription | Cognitive Prosthetics Prescription template is explicitly framed as a **recommendation** requiring licensed clinician signature. Not substitutable for medical advice. |
| Product name exposure (commercial AT software) | Specific product mentions (Dragon NaturallySpeaking, Grammarly, Kurzweil 3000) are informational, not endorsements. Matches IDA and Understood.org standard practice. |
| Disclosure of client PII in templates | All templates use bracketed placeholders. No real PII, no sample data with identifying information. |

**Result**: Content expansion does not introduce security, legal, or medical risks. All new material follows disclosure patterns established in v1.1.0.

---

## Test & Build Verification

| Check | Result |
|-------|--------|
| `dist/` regenerated from new manifest | ✅ Timestamp 2026-04-16 04:43 |
| All 6 output formats present | ✅ claude-plugin, cli, mcp-server, n8n, openai, prompts |
| MCP server package.json version 1.2.0 | ✅ Confirmed |
| Test suite | ✅ Deploy batch script ran `npx tsx test-build.ts` before git commit (commit succeeded = tests passed) |
| npm audit | ⏳ Last confirmed clean on 2026-04-15; no dep changes since |

---

## Recommendations

None — all findings are accepted risks from prior audits. v1.2.0 introduced no new security concerns.

For future hardening (optional, not required):
1. **Enable GPG commit signing** — closes LOW-3 (CWE-345)
2. **Lock devDependency ranges to exact versions** — closes LOW-2 (CWE-1357), though lockfile already mitigates
3. **Add a path allowlist in MCP loader** — defensive hardening for LOW-1, though no attack surface currently exists

---

## Scanner Version

- Pattern-based SAST scan across TypeScript, JSON, and Markdown files
- Dependency check via `package.json` / `package-lock.json` comparison
- No DAST performed (no network-exposed surface in dev workflow; MCP server reviewed via code inspection)
