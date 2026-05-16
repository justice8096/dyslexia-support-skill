<!-- SPDX-License-Identifier: CC0-1.0 -->

# Changelog

All notable changes to this skill are tracked here. Per the [Skill Versioning and Addendum Framework](https://github.com/justice8096/SecondBrainData/blob/main/SoftwarePractices/Skill-Versioning-and-Addendum-Framework.md), every change is classified by driver so downstream audit-artifact consumers can assess whether prior outputs need addendum filings.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) with **change-driver tags** appended per entry:

- `[authority]` — underlying regulation, standard, or evidence base changed
- `[defect]` — typo, broken citation, misspelled term, wrong CFR number, factual error
- `[structural]` — section restructure, new locale, new lifespan layer, new domain, new severity scale
- `[voice]` — wording refinement, tone adjustment, ambiguity fix, accessibility improvement

All four drivers affect admissibility / persuasive weight of downstream artifacts. Every change is tracked equally.

## [Unreleased]

## [1.3.0] — 2026-05-16

Framework integration release. Brings dyslexia-support-skill onto the Skill Versioning and Addendum Framework that landed in dyscalculia-support-skill v1.3.0–v1.3.2. Also closes the root-canonical drift defect: the FR/ES locale expansion that landed on `main` as commit `3939a6e` had only been written to `source/` and `dist/`; root canonical (`commands/*` + `skills/*/SKILL.md`) had drifted from source since the marketplace scaffold (`d6b08b5`). The new build-time sync resolves this and prevents recurrence.

### Added `[structural]`
- `build.ts` now syncs root canonical (`commands/*.md` + `skills/*/SKILL.md`) from `source/` as part of `npm run build`. Reads `description` from `source/manifest.json`, preserves existing root frontmatter fields (`argument-hint`, `allowed-tools`), and replaces body content with `source/commands/*.md` / `source/skills/*.md`. Also runnable standalone via `npm run build:root-canonical`. Mirrors the pattern shipped in dyscalculia-support-skill v1.3.1.
- Audit-report Provenance Block in `source/templates/audit-report-template.md` — every generated audit now starts with skill version, commit hash, generation date, sources-current-as-of, locale, region (ES only), changelog URL.
- `CHANGELOG.md` (this file) adopting the [Skill Versioning and Addendum Framework](https://github.com/justice8096/SecondBrainData/blob/main/SoftwarePractices/Skill-Versioning-and-Addendum-Framework.md) four-driver classification, with retroactive entries for v1.1.0 and v1.2.0.

### Added `[authority]`
- Inline "*Sources current as of 2026-05*" markers with authority-version pins per major FR/ES section across `standards-compliance`, `remediation-strategies`, and `document-generation` skills. Pins include Loi n° 2005-102 (specific date `11 février 2005`), Circulaire n° 2015-016 (PAP, `22 janvier 2015`), Circulaire n° 2023-033 (aménagements d'examens, `23 février 2023`), LOE (Ley Orgánica 2/2006), LOMLOE (Ley Orgánica 3/2020 Art. 71/72/79 bis), Real Decreto Legislativo 1/2013, ICD-11 6A03.0 / DSM-5 315.00 diagnostic versions, IDA Knowledge and Practice Standards 2018.

### Changed `[structural]`
- Root canonical files (`commands/*.md`, `skills/*/SKILL.md`) re-derived from `source/*` for the first time since marketplace scaffold (`d6b08b5`). Root content was previously 2–4× smaller than source — missing the v1.2.0 lifespan reframe and the v1.3.0 FR/ES expansion. Root description metadata now reflects all three jurisdictions via `source/manifest.json`.

### Fixed `[defect]`
- Root canonical files had drifted from `source/` since `d6b08b5`: they were missing the v1.2.0 lifespan-reframe (cognitive prosthetics across K-12 + higher ed + workplace + adult contexts) and the entire FR/ES expansion that landed via commit `3939a6e`. The v1.3.0 sync brings root forward to match source. **Downstream audit consumers using the v1.1.0 / v1.2.0 root canonical files should re-run audits — content was stale.**

### Process notes
- The stale `v1.3.0` tag at `4c30383` (PR #4 merge / marketplace scaffold, 2026-05-09) was force-overwritten to point at the v1.3.0 release commit. No GitHub Release had been published against the old tag — same misfire-tag pattern as the dyscalculia repo before its v1.3.0 fix.

## [1.2.0] — 2026-04-16 (retroactively documented)

Tagged on commit prior to this CHANGELOG file existing; documenting here for changelog continuity.

### Changed `[structural]`
- Reframed dyslexia as a **neurodevelopmental cognitive disorder across the lifespan** (K-12, higher education, workplace, adult). Accommodations are positioned as cognitive prosthetics compensating for persistent processing-architecture differences (per Shaywitz phonological deficit theory, Dehaene VWFA research, Gabrieli neuroimaging evidence).
- Added cognitive-disorder accommodation checklist subsections across skills.

### Added `[structural]`
- Higher-education layer: Section 504 / ADA Title II/III, DRC/DRS interaction patterns, postsecondary documentation expectations.
- Workplace layer: ADA Title I reasonable-accommodation framework, interactive process, undue hardship standard.
- Adult layer: psychoeducational evaluation pathways, adult assessment instruments (WJ-IV, WIAT-4 adult forms, Nelson-Denny).
- Multi-format build system (`build.ts`) generating outputs for `claude-plugin`, `openai`, `n8n`, `prompts`, `mcp-server`, `cli`.
- Marketplace scaffolding (`plugin.json`, `.claude-plugin/marketplace.json`).

### Changed `[voice]`
- License migrated from MIT to CC0 1.0 Universal across all source files.

### Added `[structural]` (FR/ES — commit `3939a6e`, 2026-05-11)
- French locale (`--locale fr`) support: Loi n° 2005-102, PAP (Circulaire n° 2015-016, four cycle templates: maternelle / élémentaire / collège / lycée), PPS via MDPH/CDAPH, aménagements d'examens (Circulaire n° 2023-033), RQTH for workplace via AGEFIPH/FIPHFP.
- Spanish locale (`--locale es`, optional `--region <CCAA>`): LOE/LOMLOE Art. 71/72/79 bis, ACNEAE/DEA framework (**dislexia → DEA, not NEE**), ACNS pathway, Informe Psicopedagógico checklist, EBAU/EvAU exam accommodations, 17-CCAA regional variation, RDL 1/2013 workplace framework.
- These changes landed on `main` as commit `3939a6e` but never received a proper version bump or release — folded into v1.3.0 retroactively.

## [1.1.0] — 2026-04-15 (retroactively documented)

### Changed `[authority]`
- MCP SDK security upgrade addressing the prototype-pollution risk vector in older versions.

### Added `[structural]`
- SBOM (CycloneDX) generation via `npm run sbom`.
- `SECURITY.md` vulnerability disclosure policy.
- CI/CD pipeline targeting Node 18, 20, 22.

## [1.0.0] — Initial Release

### Added `[structural]`
- Initial release covering IDA Knowledge and Practice Standards (2018), IDEA Specific Learning Disability requirements, Section 504 accommodations for dyslexia, Structured Literacy / Orton-Gillingham remediation framework, audit-report generation for K-12 reading programs.

---

## Change-driver workflow

When making a change:

1. **Classify the driver** — one of `[authority]`, `[defect]`, `[structural]`, `[voice]`.
2. **Cite the trigger** — for `[authority]`: name the law/standard/study that changed. For `[defect]`: describe what was wrong. For `[structural]`/`[voice]`: explain why.
3. **Estimate addendum burden** — would any prior generated audit/IEP/remediation-plan need addendum filings as a result of this change? If yes, flag it; the skill's `/dyslexia-addendum` command (planned) will use this signal to identify affected artifacts.

## Audit-artifact provenance

Every audit report, IEP draft, remediation plan, or accommodation justification generated by this skill must include a provenance block of the form:

```
Generated YYYY-MM-DD by dyslexia-support-skill vX.Y.Z (<git-short-hash>)
Sources current as of YYYY-MM except where individual sections note otherwise.
Skill changelog: https://github.com/justice8096/dyslexia-support-skill/blob/main/CHANGELOG.md
```

This is the linchpin of the addendum-filing workflow. Without it, the addendum command cannot identify which artifacts are affected by which changes.

## Related framework documentation

- [Skill Versioning and Addendum Framework](https://github.com/justice8096/SecondBrainData/blob/main/SoftwarePractices/Skill-Versioning-and-Addendum-Framework.md) — the cross-skill engineering principle this CHANGELOG implements.
- [Master Task List entry 17](https://github.com/justice8096/SecondBrainData) — rollout plan to other inspection-and-documentation skills (`LLMComplianceSkill`, `post-commit-audit`, `supply-chain-security`, `sast-dast-scanner`, `cwe-mapper`).
- [Sister skill: dyscalculia-support-skill](https://github.com/justice8096/dyscalculia-support-skill) — pilot implementation of this framework; landed in dyscalculia v1.3.0–v1.3.2.
