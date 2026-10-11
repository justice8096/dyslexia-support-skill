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

## [1.4.2] - 2026-10-11

### Changed `[voice]`
- CHANGELOG no longer names the icon file by path; the Directory validator treats any text that refers to an image file as an unread asset reference.

## [1.4.1] - 2026-10-11

Directory policy fixes and CI dependency refresh.

### Fixed `[defect]`
- Removed the unused bare `Bash` entry from `allowed-tools` in `dyslexia-audit` and `content-accessibility-check`; neither command runs shell commands.
- Replaced local `D:\` documentation paths in `generate-iep` and `remediation-plan` with a name-only reference to the linguistics-mcp integration guide.
- `npm audit fix`: js-yaml 4.3.2, brace-expansion 2.1.7, tsx 4.21.0; SBOM regenerated. Clears the high advisories that were failing the CI security-audit step (supersedes dependabot #6, #9, #10).

### Added `[structural]`
- Plugin icon (1024x1024 PNG) for the Directory listing.

## [1.4.0] - 2026-10-11

Research refresh. Every "Sources current as of" pin moves from 2026-05 to 2026-10. Full findings with sources: `docs/research/research-update-2026-10-11.md`. Downstream consumers of 1.3.x audits should re-run FR exam-accommodation and font-related findings; see the addendum triggers below.

### Changed `[authority]`
- Clinical framing now cites the **2025 IDA definition of dyslexia** (accuracy and/or speed deficit in word reading and spelling, persisting despite instruction effective for peers; genetic, neurobiological and environmental causes; phonological and morphological processing common but not universal). The 2002 definition is retired. Audit checklists drop IQ-achievement discrepancy as a criterion and require accuracy and rate to be reported separately (Shechter, Share et al., Reading and Writing, March 2026). Affects standards-compliance sec 0 and 1, remediation-strategies two-track framing, gap-analysis framing note, document-generation clinical summaries, all four commands.
- **Specialty dyslexia fonts are no longer recommended or scored.** Azzarello et al. (Annals of Dyslexia, July 2026; 15 studies, 91 effect sizes, N=688) find no pooled effect of OpenDyslexic/Dyslexie on reading speed or accuracy (g = -0.04, 95% CI -0.15 to 0.07). Every font row and checklist item now specifies legibility features (sans-serif, 12-16pt, 1.5 line spacing, letter spacing, 45-65 character lines, left alignment, user-chosen typeface); OpenDyslexic is "permitted on request" where a regulator names it. Affects remediation-strategies (US/FR/ES prosthetics tables), standards-compliance (ADA Title I list, FR and ES accommodation lists, cognitive-disorder checklist), document-generation (PAP, ACNS, prosthetics letter, ES workplace), gap-analysis (Gap 8, content audit checklist), content-accessibility-check command and manifest descriptions.
- **US**: A.J.T. v. Osseo Area Schools (SCOTUS, 12 June 2025) added: student ADA/504 education claims no longer require "bad faith or gross misjudgment"; accommodation-fidelity findings rated HIGH minimum. ADA Title II web rule compliance dates updated to 26 April 2027 (population 50,000+) and 26 April 2028 (smaller entities) per the DOJ interim final rule of April 2026; WCAG 2.1 AA floor, 2.2 AA recommended. ED interagency agreements (Nov 2025, 16 June 2026): IDEA grant administration and monitoring to HHS, OCR complaint investigation to DOJ Civil Rights Division; statutory rights unchanged. HHS Section 504 rule (May 2024) status and Texas v. Kennedy posture documented; ED's 34 CFR 104 still governs schools. State dyslexia-law evidence (Hu, Sayeski and Morgan 2025: 55% of states no identification change, 4 states improved SLD reading) added to IDEA section and Gap 1.
- **France**: pôles d'appui à la scolarité (PAS) added as first-level contact per the circulaire du 1er septembre 2025 (NOR MENE2520651C), replacing PIAL 2025-2027, with the contested statutory basis noted (CMP 1 July 2025; Assemblée rejection 11 May 2026; Delpech PPL in nouvelle lecture at the Sénat). PAP and PPS now described as entered in the Livret de parcours inclusif (LPI). School-exam accommodations now cite the circulaire du 14 mars 2022 (NOR MENE2204112C) with annexes replaced by the circulaire du 17 juillet 2025 (NOR MENE2506522C, BO n° 31 du 21 août 2025; session 2026; procédure simplifiée vs complète; Incluscol; lecture à voix haute neutralisation at the oral de français). Higher-education examens et concours cite the circulaire du 6 février 2023 (NOR ESRS2234137C, BO n° 10 du 9 mars 2023). European Accessibility Act (ordonnance 2023-859, décret 2023-931, in application 28 June 2025) added to the adult layer.
- **Spain**: EBAU/EvAU renamed **PAU** throughout (legacy names kept as aliases and trigger words). Real Decreto 534/2024 (art. 3.2, 13.10, 21.1) cited as the national floor: adaptations based on prior-stage support, no adaptation may lower the grade, 10% writing-quality criterion relaxable for ACNEAE. Madrid acuerdos (11 Nov 2024, 17 Nov 2025) and Castilla y León (Orden EDU/1225/2024, COPAU 21 March 2025) spelling-deduction rules added; request routed through the school with the 2026 window and appeal ladder. Orden PJC/804/2025 (BOE-A-2025-15426) added for adaptations in public-employment selection processes. Ley 11/2023 (EAA transposition, obligations from 28 June 2025, fines to EUR 1M) added.
- **EU layer**: EN 301 549 v4.1.1 (September 2026, WCAG 2.2) noted as published but not yet cited in the Official Journal; v3.2.1 / WCAG 2.1 AA remains the harmonised benchmark.

### Fixed `[defect]`
- **"Circulaire n° 2023-033 du 23 février 2023" removed everywhere.** No Bulletin officiel entry carries that number or date. The exam-accommodation texts are the circulaire du 14 mars 2022 as amended 17 juillet 2025 (school exams) and the circulaire du 6 février 2023 (higher education). The 1.3.0 source pins, standards-compliance FR table, document-generation FR template 14, dyslexia-audit command and manifest descriptions all carried the phantom citation. Addendum trigger for any 1.3.x FR audit that cited it.
- **DSM-5 "315.00" replaced by DSM-5-TR with ICD-10-CM F81.0.** 315.00 is the ICD-9-CM code, unusable on US claims since October 2015; it is retained once as a labelled legacy alias. Affects standards-compliance sec 0, every document-generation clinical block (templates 7, 8, 9, 11), README and manifest.
- RQTH template: "Pôle Emploi" replaced by France Travail (merged 1er janvier 2024, loi n° 2023-1196).

### Added `[structural]`
- `docs/research/research-update-2026-10-11.md`: the findings report behind this release, with primary-source links.
- Trigger words for PAS, PIAL, LPI, Incluscol, France Travail, PAU, RD 534/2024, Orden PJC/804/2025, EAA, EN 301 549, A.J.T. v. Osseo, Title II web rule.

### Changed `[voice]`
- "Fluency-first" renamed "rate-first" for Spanish to match the 2025 definition's accuracy/speed vocabulary (Gap 10, manifest, remediation-strategies pins).

## [1.3.1] - 2026-10-11

### Fixed
- Replaced U+2014 em dashes with hyphens in plugin.json, .claude-plugin/plugin.json, .claude-plugin/marketplace.json and source/manifest.json; the Anthropic Directory rendered the UTF-8 em dash as mojibake in the listing description. `[defect]`
- Bumped version to 1.3.1. `[voice]`

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
