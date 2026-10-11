# dyslexia-support-skill: research refresh (2026-10-11)

Baseline: source/skills/*.md pinned "Sources current as of 2026-05". Everything below is new since then, or was already wrong at that date and only surfaced now. Each finding names the file and section it changes. Severity: P1 = the skill currently states something false or superseded; P2 = material new fact the skill should carry; P3 = enrichment.

## Summary of what changes

| # | Sev | Finding | Files touched |
|---|-----|---------|---------------|
| 1 | P1 | IDA adopted a new definition of dyslexia (2025). The skill still frames on the 2002 definition (phonological core, "unexpected", "neurobiological in origin"). | standards-compliance (sec 0, 1), remediation-strategies (intro, locale notes), gap-analysis (framing note), document-generation (clinical summary) |
| 2 | P1 | Dyslexia-friendly fonts: a 2026 meta-analysis (15 studies, N=688) finds no effect on speed or accuracy. The skill recommends Lexend/Atkinson/OpenDyslexic as a prosthetic in six places. | remediation-strategies, document-generation, standards-compliance, content-accessibility-check command |
| 3 | P1 | French exam-accommodation citations are conflated. "Circulaire 2023-033 du 23 février 2023" is actually the circulaire du 6 février 2023 (NOR ESRS2234137C, BO n°10 of 9 March 2023), which replaces 2011-220 and is the cross-ministry text. Brevet/Bac/BTS/CAP forms are governed by the circulaire du 14 mars 2022 (MENE2204112C), whose annexes were replaced by the circulaire du 17 juillet 2025 (MENE2506522C, BO n°31 of 21 Aug 2025), in force from session 2026. | standards-compliance (FR table, checklist), document-generation (FR templates 11-13), all four commands |
| 4 | P1 | US clinical codes: 315.00 is the retired ICD-9-CM code. DSM-5-TR paperwork uses ICD-10-CM F81.0. Keep 315.00 only as a historical alias. | standards-compliance sec 0, document-generation (every clinical summary block) |
| 5 | P1 | "Pôle Emploi" no longer exists; it became France Travail on 1 Jan 2024. RQTH template checkbox is stale. | document-generation (RQTH template) |
| 6 | P2 | A.J.T. v. Osseo Area Schools (SCOTUS, 12 June 2025, unanimous): students bringing ADA/504 education claims no longer need to show "bad faith or gross misjudgment"; ordinary disability-discrimination standards apply, and an IDEA win does not foreclose ADA/504 damages. | standards-compliance (US sec 2-4, OCR complaint flow), document-generation (504 plan notes) |
| 7 | P2 | ADA Title II web rule: DOJ interim final rule (April 2026) pushed compliance to 26 Apr 2027 (entities >= 50k pop.) and 26 Apr 2028 (smaller). Still WCAG 2.1 AA. | standards-compliance (ADA Title II), content-accessibility-check |
| 8 | P2 | Federal oversight shift: ED interagency agreements (Nov 2025, 16 June 2026) move IDEA grant administration/monitoring to HHS and route OCR complaint investigation to DOJ Civil Rights Division. Statutory rights unchanged; complaint intake path changed. | standards-compliance (US agencies, OCR procedure) |
| 9 | P2 | HHS Section 504 rule (May 2024) is in force; Texas v. Kennedy litigation narrowed; gender-dysphoria preamble language declared unenforceable (Apr 2025). ED's 1977 504 regs still govern schools. | standards-compliance (504 section) |
| 10 | P2 | France PAS (pôles d'appui à la scolarité): generalisation circulaire of 1 Sept 2025 (MENE2520651C) rolls PAS out 2025-2027 replacing PIAL, but Parliament rejected the statutory basis twice (CMP 1 July 2025; Assemblée 11 May 2026). The Delpech proposition de loi is in nouvelle lecture at the Sénat. Skill never mentions PAS or PIAL. | standards-compliance (FR actors table), remediation-strategies FR, document-generation (PPS/MDPH package) |
| 11 | P2 | France PAP is now entered in the Livret de parcours inclusif (LPI) application; the four-cycle Circulaire 2015-016 paper template is the content model but the workflow is digital. | document-generation (PAP), dyslexia-audit command |
| 12 | P2 | Spain: EBAU/EvAU is now the PAU under Real Decreto 534/2024 (art. 3.2, 21.1, 13.10). National floor: adaptations cannot lower grades, writing-quality 10% minimum may be relaxed for ACNEAE, measures must mirror prior-stage support. Madrid 2026 acuerdo (17 Nov 2025): +30 min max per exam, A3 format, enunciados read aloud, adapted spelling correction; application window 1 Dec 2025 to 20 Jan 2026. | standards-compliance 8.6, document-generation template 19, all commands (rename EBAU/EvAU -> PAU) |
| 13 | P2 | Spain workplace: Orden PJC/804/2025 (BOE 25 July 2025) sets national criteria for adaptations of time and means in public-employment selection processes. Skill's RDL 1/2013 layer has no oposiciones pathway. | standards-compliance (ES workplace), document-generation template 20 |
| 14 | P2 | European Accessibility Act applies since 28 June 2025 (Spain: Ley 11/2023; France: ordonnance 2023-859 / décret 2023-931). EN 301 549 v4.1.1 (Sept 2026) adopts WCAG 2.2 but is not yet cited in the OJEU, so v3.2.1 / WCAG 2.1 AA remains the legal benchmark. Skill's content checks cite WCAG only, no EAA. | content-accessibility-check, standards-compliance (FR/ES consumer tech), gap-analysis (EdTech locale gap) |
| 15 | P3 | Operationalising the 2025 definition: Shechter, Share et al. (Reading and Writing, Mar 2026) propose separate accuracy and rate subtypes (<25th pct on one, >35th on other), with distinct cognitive profiles (PA/MA deficit vs RAN deficit). Directly supports the skill's "transparent orthography = rate-dominant" claim. | remediation-strategies (assessment guidance), gap-analysis (cross-linguistic assessment) |
| 16 | P3 | Hu, Sayeski, Morgan (Annals of Dyslexia): NAEP 2003-2022 across 47 states; 55% of states saw no change in SLD identification after dyslexia laws, only 4 states improved SLD reading achievement. Strengthens gap-analysis "retroactive vs proactive" and "assessment-to-instruction pipeline" gaps. California K-2 universal screening live from 2025-26. | gap-analysis, standards-compliance (state law note) |
| 17 | P3 | Atkinson Hyperlegible Next and Mono (Braille Institute, 2025): variable weight, expanded character set. If fonts stay in the skill as a legibility option, point at Next for FR/ES diacritics. | remediation-strategies FR/ES tables |

## Finding detail and recommended text

### 1. IDA 2025 definition (P1)

Adopted by IDA in 2025 (public explanation Nov 2025). Sentence-level content: dyslexia is a specific learning disability characterised by difficulties in word reading and/or spelling, in accuracy, speed or both, with features varying by orthography; difficulties lie on a continuum of severity and persist despite instruction effective for peers; causes are a combination of genetic, neurobiological and environmental influences interacting across development; phonological and morphological processing difficulties are common but not universal, and early oral language weakness is a frequent precursor; secondary consequences include comprehension, reduced reading experience, written expression, academic achievement, psychological well-being and employment; identification and targeted instruction help at any age, with the strongest effect before and during early schooling.

Removed from 2002: the "other cognitive abilities" clause (the basis for IQ-discrepancy), the single phonological-core framing. Not added: fluency as a term (replaced by accuracy/speed), co-occurring conditions (ADHD, DLD, dyscalculia explicitly kept outside the definition).

Skill impact:
- standards-compliance sec 0 and sec 1: quote the 2025 definition, note the 2002 definition as superseded, and retire any IQ-discrepancy language in audit criteria.
- The skill's own "neurodevelopmental cognitive disorder" framing survives but should be worded as compatible with the 2025 text (persistent, continuum, genetic + neurobiological + environmental), and should stop implying a purely phonological deficit. Add morphology as a co-equal processing target in the remediation track.
- remediation-strategies locale notes: the 2025 definition's "accuracy, speed, or both, depending on orthography" is now the citation for the English-accuracy / Spanish-rate split, replacing the informal Share/Ziegler references.
- document-generation clinical summaries: add a line "Meets 2025 IDA definition criteria: persistence despite effective peer instruction; accuracy and/or speed deficit documented."

### 2. Fonts (P1)

Azzarello, Paek, Hodge, Jameson, Lewis et al., Annals of Dyslexia, online 31 July 2026. 15 studies, 91 effect sizes, N=688, random-effects. Overall g = -0.04 (95% CI -0.15 to 0.07, p = 0.50). No reliable benefit of OpenDyslexic / Dyslexie over Arial / Times on speed or accuracy. This is consistent with the earlier Rello & Baeza-Yates and Wery & Diliberto findings; the new paper is the first pooled estimate.

Skill impact:
- Reframe the "Dyslexia-friendly fonts" prosthetic row in remediation-strategies, the font bullet in the ADA Title I accommodation list, and the content-accessibility-check typography dimension: the evidence supports legibility features (sans-serif, 14-16 pt, 1.5 line spacing, 0.05-0.1 em letter spacing, 45-65 char lines, left-aligned, no full justification) and user choice, not any specific font. Keep OpenDyslexic as "permitted where a regulator names it" (Spain regional PAU/ACNS lists, FR PAP circulaire names Arial/OpenDyslexic) but stop listing it as evidence-based.
- content-accessibility-check: stop failing content for not using a "dyslexic-friendly font"; score the spacing/size/contrast features instead.
- gap-analysis: this is a worked example of the "dyslexia UX standards built on folk evidence" gap.

### 3. French exam circulaires (P1)

Three texts, not one:
- Circulaire du 8 décembre 2020 as modified by circulaire du 14 mars 2022 (MENE2204112C, BO n°14 of 7 April 2022): school-level examens (DNB, CFG, bac général/techno/pro, BP, BTS, CAP, DCG/DSCG). Procédure complète vs simplifiée, Incluscol forms.
- Circulaire du 17 juillet 2025 (MENE2506522C, BO n°31 of 21 August 2025): replaces annexes 1-3 of the 2022 circulaire with 16 new annexes (8 exam families x complete/simplified), aligned with Incluscol, adds a lecture-a-voix-haute neutralisation for the oral de français for candidates granted written communication. Applies from session 2026.
- Circulaire du 6 février 2023 (ESRS2234137C, BO n°10 of 9 March 2023): cross-ministry text (ESR, EN, culture, agriculture, santé) replacing 2011-220; this is what FFDys reports as "nouvelle circulaire". Key DYS content: CDAPH-designated doctor may rely on prior PAP/PPS; compensatory breaks; human aids may reformulate and sequence; calculator exception for dyscalculia/dyspraxia; dysorthographie accommodation or exemption on spelling-assessed tests; no diploma conditioned on an external language certification.

The skill's "Circulaire n° 2023-033 du 23 février 2023" could not be matched to any BO entry; the date and number appear to be invented or transcribed wrong. Replace every occurrence with the NOR-and-date citations above and point Brevet/Bac templates at the 2025 annexes.

### 4. Clinical codes (P1)

DSM-5-TR Specific Learning Disorder with impairment in reading codes as ICD-10-CM F81.0 (the 315.00 figure is ICD-9-CM, unusable on US claims since Oct 2015). ICD-11 6A03.0 stays correct. Change every "DSM-5: 315.00" to "DSM-5-TR: F81.0 (ICD-10-CM; legacy ICD-9-CM 315.00)". Spanish and French templates that cite "DSM-5 / ICD-11" are fine; the FR one correctly uses CIM-11 6A03.

### 5. France Travail (P1)

Pôle emploi merged into France Travail on 1 January 2024 (loi 2023-1196 pour le plein emploi). RQTH template checkbox "Demandeur(euse) d'emploi inscrit(e) à Pôle Emploi" -> "inscrit(e) à France Travail". Also check the AGEFIPH/FIPHFP rows for Cap emploi references; those names are unchanged.

### 6. A.J.T. v. Osseo (P2)

605 U.S. ___ (12 June 2025), Roberts for a unanimous Court. Education-context ADA Title II and Section 504 claims are judged by the same standards as any other disability-discrimination claim; the Eighth Circuit's "bad faith or gross misjudgment" bar is rejected. A prior IDEA due-process victory does not bar a later ADA/504 suit for damages. Skill impact: in standards-compliance, the K-12 compliance section should say that a documented failure to provide a reasonable accommodation (including IEP/504 accommodations not delivered) is now actionable without proving bad faith, raising the stakes of the "accommodation fidelity" audit items. Add to the OCR/judicial remedies paragraph.

### 7. ADA Title II web rule (P2)

28 CFR part 35 subpart H (April 2024 final rule, WCAG 2.1 AA). DOJ interim final rule published April 2026 moved the dates: 26 April 2027 for public entities with population >= 50,000; 26 April 2028 for smaller entities and special districts. Comments ran to 22 June 2026. Public schools, districts, state universities and community colleges are Title II entities, so their LMS, courseware and PDFs fall under this. Skill impact: standards-compliance ADA Title II row and content-accessibility-check "assistive technology compatibility" dimension should cite the rule, the dates, and WCAG 2.1 AA as the floor (WCAG 2.2 as recommended).

### 8 and 9. Federal oversight and 504 rule (P2)

- ED interagency agreements: Nov 2025 round moved several program offices to Labor, Interior, State, HHS; 16 June 2026 round moved OSERS grant administration, monitoring and state IDEA determinations to HHS (OSERS keeps policy, TA, outreach; FY2026 IDEA grants stay in ED's system) and routed OCR complaint evaluation/investigation to DOJ Civil Rights Division (OCR keeps intake, final enforcement decisions, mediation, CRDC). No statutory rights changed. Skill impact: the "file an OCR complaint" steps in standards-compliance and document-generation should note that investigations may be conducted by DOJ and that the responsible IDEA monitoring agency is HHS for later allocations.
- HHS 504 rule (89 FR 40066, 9 May 2024) in effect for HHS-funded entities; April 2025 Federal Register notice disclaims the gender-dysphoria preamble; Texas v. Kennedy narrowed and stayed. ED's 34 CFR 104 (1977) still governs schools; no ED rulemaking expected. Skill impact: a one-paragraph status note in the 504 section so audits do not cite the HHS rule against schools.

### 10 and 11. France: PAS and LPI (P2)

- PAS circulaire du 1er septembre 2025 (MENE2520651C): pilots in Aisne, Côte-d'Or, Eure-et-Loir, Var (rentrée 2024); generalisation rentrée 2025-2027; replaces PIAL; first-level responses (pedagogical adaptations, materials, short-term support) without prior CDAPH decision; implements MDPH-notified AESH; orients to PCO/CAMSP/CMPP; helps families prepare MDPH files; does not replace PAP, PPS or MDPH compensation. Legal footing contested: PAS article dropped by CMP 1 July 2025 and rejected again by the Assemblée on 11 May 2026; Delpech PPL (AN n°439, Sénat n°608) in nouvelle lecture at the Sénat as of 22 May 2026; Senate written question n°08943 (28 May 2026) challenges deployment beyond the experimental scope. Skill impact: add PAS/PIAL to the FR actors table and to the PPS/MDPH package as the first point of contact; flag the legal status as "deployed by circulaire, statutory basis pending".
- LPI: Eduscol's "LPI pas-a-pas saisie PAP 2025-2026" guides show the PAP is created and reviewed in the LPI application; the Circulaire 2015-016 four-cycle structure remains the content model. Skill impact: the PAP template instruction "use the correct cycle sheet" should add "entered in the LPI by the directeur/chef d'établissement; médecin de l'éducation nationale avis still required".

### 12. Spain: PAU under RD 534/2024 (P2)

Real Decreto 534/2024 de 11 de junio (BOE 12 June 2024) regulates the new PAU from the 2024-25 course. Relevant articles: 3.2 (igualdad de oportunidades: adaptation of time, special exam models, material/human/support resources, accessible venues, measures based on prior-stage support and "no podrá ser tenida en cuenta para minorar las calificaciones"); 13.10 (10% writing-quality criterion may be relaxed for ACNEAE); 21.1 (commissions must adopt non-discrimination measures). Regional acuerdos now sit on this floor: Madrid Comisión Organizadora acuerdo 11 Nov 2024 (PAU 2025) and 17 Nov 2025 (PAU 2026): dyslexia in Grupo 2 with +30 min max per exam, DIN A3, enunciados read on request, extra answer sheet and adapted spelling correction (per Resolución DG Universidades 27 April 2023) for students with equivalent Bachillerato adaptations; window 1 Dec 2025 to 20 Jan 2026, resolutions before 16 March 2026. Castilla y León (Orden EDU/1225/2024, COPAU acuerdo 21 Mar 2025) publishes explicit spelling-deduction rules for Lengua II (max 1 point, natural errors not counted, 0.10 per further error) and Lengua Extranjera II. Skill impact: rename EBAU/EvAU to PAU throughout (keep old names as aliases in trigger lists), cite RD 534/2024 as the national floor in standards-compliance 8.6 and template 19, replace "Madrid Resolution 27/04/2023" as the primary cite with the annual acuerdo, and add the no-grade-reduction rule to the audit checklist.

### 13. Spain: Orden PJC/804/2025 (P2)

BOE-A-2025-15426 (25 July 2025, errata BOE-A-2025-17856). National criteria for adaptación de medios y tiempos and other reasonable adjustments in public-employment selective processes for persons with disability (certificado >= 33%). Skill impact: the ES workplace layer currently covers only private employment under RDL 1/2013; add an "acceso al empleo público" pathway citing this Orden alongside the RDL 1/2013 7% public-sector quota.

### 14. EAA and EN 301 549 (P2)

Directive 2019/882 in application from 28 June 2025. Spain: Ley 11/2023 de 8 de mayo (in force 29 May 2023, obligations from 28 June 2025; transition to 28 June 2030 for existing services; penalties up to EUR 1M; Dirección General de Consumo as surveillance authority). France: ordonnance 2023-859 and décret 2023-931. Covered: e-commerce, e-books and reading software, banking, ICT consumer products, transport apps, telecoms. EN 301 549 v4.1.1 published September 2026 (WCAG 2.2 incorporated) but not cited in the OJEU, so v3.2.1 (WCAG 2.1 AA) remains the presumption-of-conformity benchmark. Skill impact: content-accessibility-check's FR/ES locale checks should add an EAA scope test for consumer apps and e-books; gap-analysis "EdTech locale-awareness" gap gets a regulatory lever it lacked; remediation-strategies audiobook rows (Vocale Presse, Audible.es) can note that e-book accessibility is now a legal obligation for sellers.

### 15 to 17 (P3)

Covered in the table. For 15, the concrete assessment guidance to add: measure accuracy and rate separately on an untimed fixed word list rather than a words-correct-per-minute score, which is also what makes the measure portable across orthographies. For 16, add the Hu et al. numbers to the gap-analysis section on retroactive vs proactive accessibility, with the caveat that NAEP is cross-sectional and implementation lags passage.

## Things checked and found unchanged

- IDA Knowledge and Practice Standards: 2018 edition still current; no revision announced.
- ICD-11 6A03.0: unchanged.
- Circulaire 2015-016 (PAP): still the governing text; LPI is a delivery change only.
- RDL 1/2013 thresholds (33% certificado, 2% quota at 50+ employees): unchanged.
- WCAG: 2.2 is current (Oct 2023), but no US or EU legal instrument yet requires it.
- Loi 2005-102, Code de l'éducation L321-4, Loi Avenir professionnel référent handicap at 250+: unchanged.

## Suggested release

Bundle 1 to 5 as a 1.4.0 (behaviour-changing: fonts no longer scored, codes and citations corrected, PAU rename). 6 to 14 can ride the same release. Bump the "Sources current as of" pins to 2026-10. CHANGELOG tags: [defect] for 3, 4, 5; [evidence] for 1, 2, 15, 16; [regulatory] for 6 to 14.

## Sources

- IDA, 2025 definition explanation: https://dyslexiaida.org/explanation-2025-dyslexia-definition-explanation/
- NCIL, Understanding the new IDA definition: https://improvingliteracy.org/resource/understanding-the-new-ida-dyslexia-definition/
- Shechter, Share et al., Reading and Writing 2026: https://link.springer.com/article/10.1007/s11145-026-10796-3
- Azzarello et al., Annals of Dyslexia 2026 (fonts meta-analysis): https://link.springer.com/article/10.1007/s11881-026-00389-8
- Hu, Sayeski, Morgan, Annals of Dyslexia (state laws): https://pubmed.ncbi.nlm.nih.gov/40956540/ and https://www.psypost.org/new-state-dyslexia-laws-show-mixed-results-for-student-reading-achievement/
- A.J.T. v. Osseo: https://www.faegredrinker.com/en/insights/publications/2025/6/supreme-court-decides-ajt-v-osseo-area-schools-independent-school-district-no-279
- DOJ Title II deadline extension: https://www.consumerfinancialserviceslawmonitor.com/2026/04/doj-extends-title-ii-ada-web-accessibility-rule-compliance-deadlines-for-state-and-local-governments/
- ED interagency agreements: https://www.k12dive.com/news/education-department-transfers-key-special-ed-civil-rights-functions/823022/
- Section 504 rule status: https://spedlawspotlight.com/whats-happening-with-the-section-504/
- Circulaire 17 juillet 2025 (MENE2506522C): https://www.education.gouv.fr/bo/2025/Hebdo31/MENE2506522C
- Circulaire 6 février 2023 (ESRS2234137C): https://www.enseignementsup-recherche.gouv.fr/fr/bo/23/Hebdo10/ESRS2234137C.htm
- FFDys on the 2023 circulaire: https://www.ffdys.com/actualites/nouvelle-circulaire-adaptations-et-amenagements-aux-examens-pour-les-candidats-en-situation-de-handicap-dans-lenseignement-superieur/
- Circulaire 14 mars 2022 (MENE2204112C): https://www.education.gouv.fr/bo/22/Hebdo14/MENE2204112C.htm
- PAS circulaire 1er septembre 2025 (MENE2520651C): https://bulletins-officiels.social.gouv.fr/sites/textes-officiels/files/2025-09/MENE2520651C.pdf
- Sénat question 08943 on PAS: https://www.senat.fr/questions/base/2026/qSEQ260508943.html
- Delpech PPL dossier: https://www.senat.fr/dossier-legislatif/ppl24-571.html
- LPI saisie PAP 2025-2026 (ac-aix-marseille): https://www.pedagogie.ac-aix-marseille.fr/upload/docs/application/pdf/2025-11/lpi_pas-a-pas_saisie_pap_2025-2026_vc.pdf
- Madrid PAU 2025 acuerdo: https://www.comunidad.madrid/docs/assets/2025/01/30/2024.11.11_acuerdo_de_adaptaciones_pau_2025.pdf
- Madrid PAU 2026 acuerdo (URJC copy): https://www.urjc.es/images/EstudiarURJC/Admision_matricula/grado/pruebas_acceso/PAU_2026/4.%202025.11.17_PROPUESTA%20ACUERDO%20ADAPTACIONES%20PAU%202026%20vfinal%20publicar.pdf
- UC3M PAU adaptaciones: https://www.uc3m.es/pruebasacceso/adaptaciones-evau
- Castilla y León PAU 2025 ACNEAE (RD 534/2024 articles): https://unileon.es/files/2025-03/pau2025_centros_tratamiento_alumnos_ACNEAE.pdf
- Orden PJC/804/2025: https://www.boe.es/buscar/act.php?id=BOE-A-2025-15426
- Spain EAA transposition (Ley 11/2023): https://www.fieldfisher.com/es-es/locations/espana/actualidad/accesibilidad-obligatoria-claves-de-la-transposicion-accesibility-act
- EN 301 549 v4.1.1: https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en
- Atkinson Hyperlegible Next: https://en.wikipedia.org/wiki/Atkinson_Hyperlegible
- ICD-10-CM F81.0: https://www.aapc.com/codes/icd-10-codes/F81.0
- California K-2 screening: https://decodingdyslexiaca.org/its-official-governor-newsom-signs-bill-requiring-k-2-screening/
