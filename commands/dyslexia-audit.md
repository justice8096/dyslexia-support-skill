---
description: Audit a program, tool, curriculum, workplace policy, or content for compliance with dyslexia cognitive accommodation requirements across three jurisdictions. **United States** (locale=us, default): evaluates against IDA Knowledge and Practice Standards, structured literacy fidelity, IDEA/504 for K-12, Section 504/ADA for higher education, ADA Title I for workplace, ADA Title III for public accommodations. **France** (locale=fr): evaluates against Loi 2005-102 / Code de l'éducation Art. L321-4, PAP compliance per Circulaire 2015-016, PPS/MDPH process compliance, exam aménagements consistency per Circulaire 2023-033, qualified-professional assessment (bilan orthophonique, neuropsychologique). **Spain** (locale=es): evaluates against LOE/LOMLOE, correct ACNEAE classification (DEA — not NEE — for dyslexia/dyscalculia), ACNS documentation requirements, Informe Psicopedagógico completeness, EBAU/EvAU accommodation consistency, regional Comunidad Autónoma legislation when --region specified. Generates comprehensive audit report with findings, composite score (A-F grade), and remediation roadmap covering structured literacy coverage, cognitive prosthetics availability, accommodation adequacy, and UDL principles. FR/ES audits include US crosswalk references. Creates audit files in audits/ subdirectory.
argument-hint: <project-name> [--context=k12|higher-ed|workplace|public-accommodation] [--scope=full|materials|assessment|technology|accommodation-policy] [--age-group=elementary|middle|high|college|adult]
allowed-tools: [Read, Glob, Grep, Bash, Write, Edit]
---
# /dyslexia-audit

Run a comprehensive dyslexia standards compliance audit on a project, program, document, or tool — across US, French, or Spanish legal frameworks.

## Usage
```
/dyslexia-audit [target] [--locale us|fr|es] [--region <ccaa>]
```

Where `[target]` is a project path, program name, document, tool, or URL to audit.

**`--locale`** selects the legal framework to audit against (default: `us`):
- `us` — United States (IDEA, Section 504, IDA Knowledge and Practice Standards, ADA for higher-ed and workplace)
- `fr` — France (Loi 2005-102, Code de l'éducation, PAP/PPS system, Circulaire 2015-016, RQTH for adult workplace)
- `es` — Spain (LOE/LOMLOE, ACNEAE/DEA framework, ACNS pathway, RDL 1/2013 for workplace; pair with `--region` for Comunidad Autónoma)

**`--region`** (only when `--locale es`): Comunidad Autónoma for region-specific Spanish legislation (e.g., `madrid`, `cataluna`, `andalucia`, `pais-vasco`, `valencia`, `galicia`). Each region has its own implementing decrees with distinct ACNS terminology and EBAU/EvAU procedures.

## What This Command Does

1. **Identifies the target type** (project/codebase, curriculum, IEP, PAP, ACNS, 504 plan, EdTech tool, content, workplace policy)

2. **For project audits** (when target is a directory/codebase):
   - Creates an `audits/` subdirectory in the project root if it doesn't exist
   - Scans the project for dyslexia-related files, configurations, content, and code
   - Writes the audit report to `audits/Dyslexia-Compliance-Audit-<project-name>-<YYYY-MM-DD>.md` (locale and region suffixed when applicable)

3. **Runs the appropriate compliance checklists** from the standards-compliance skill, based on the selected locale

4. **Evaluates against (locale-dependent):**

   **locale=us (default):**
   - IDA Knowledge and Practice Standards (5 domains)
   - IDEA requirements (if IEP/services related)
   - Section 504 requirements (if accommodation related)
   - Structured Literacy alignment (6 elements)
   - Orton-Gillingham principles (5 principles)
   - ADA Title I (workplace), Title II/III (public accommodations) when context is adult/workplace/higher-ed

   **locale=fr (France):**
   - Loi n° 2005-102 du 11 février 2005 (Loi Handicap) compliance
   - Code de l'éducation Art. L321-4 accommodation obligations
   - PAP compliance against Circulaire n° 2015-016 template requirements (with correct cycle: maternelle / élémentaire / collège / lycée)
   - PPS/MDPH process compliance (if applicable)
   - Exam aménagements consistency against Circulaire n° 2023-033
   - Assessment by qualified professionals (bilan orthophonique, neuropsychological evaluation)
   - Annual review documentation
   - RQTH workplace layer when context is adult/workplace (AGEFIPH/FIPHFP funding pathways)
   - France–US crosswalk references included in report

   **locale=es (Spain):**
   - LOE/LOMLOE Art. 71, 72, and 79 bis compliance
   - Correct ACNEAE classification (DEA, not NEE, for dyslexia/dyscalculia)
   - ACNS documentation requirements (written, family-agreed, annually reviewed)
   - Informe Psicopedagógico completeness
   - PRODISLEX or equivalent early identification protocol use
   - EBAU/EvAU accommodation consistency with classroom ACNS
   - Regional Comunidad Autónoma legislation (when `--region` specified)
   - RDL 1/2013 (Ley General de Discapacidad) when context is adult/workplace — including 2% reserved-employment quota check for firms ≥50 employees
   - Spain–US crosswalk references included in report

5. **Generates a compliance report** following the standard audit format:
   - Metadata table (Project, Date, Auditor, Standards, Scope, Type)
   - Executive Summary with composite score
   - Findings Summary table by severity
   - Compliance by Domain table
   - Detailed findings organized by severity (CRITICAL → HIGH → MEDIUM → LOW)
   - Each finding with: ID, Standard/Law, Severity, Category, Element, Description, Impact, Evidence, Remediation, Effort Estimate
   - Standards Crosswalk matrix
   - Composite Score with weighted dimensions
   - Remediation Roadmap prioritized by impact
   - What Passed section
   - Version History

6. **Flags critical issues** (e.g., 504 plan used where IEP is needed, missing legally required IEP sections, instruction not addressing all structured literacy elements)

## Re-Audit Behavior

When a previous audit file exists in `audits/`:
- Reads prior findings and their IDs
- Generates a new dated report
- Includes a **Remediation Status** table showing FIXED / PARTIALLY FIXED / REMAINING for each prior finding
- Includes a **Before/After Delta Table** showing score changes per dimension
- Documents what changed and what didn't for each compliance domain
- Preserves finding IDs for traceability (e.g., F-001 stays F-001 across audits)

## Output

**Primary output**: A Markdown audit report file written to `<project>/audits/`

**File naming**: `Dyslexia-Compliance-Audit-<project-name>-<YYYY-MM-DD>.md`

The report follows the same format used across other project audits (SAST/DAST, accessibility, LLM compliance, supply chain) for consistency.

**Locale-aware report elements:**
- Metadata table includes `Locale` field (and `Region` for ES) and locale-appropriate standards cited
- Compliance by Domain table uses locale-appropriate domains (IDA/IDEA/504/ADA for US; PAP/PPS/exam consistency/RQTH for FR; ACNEAE/DEA/ACNS/RDL 1/2013 for ES)
- Findings cite locale-specific legal references (e.g., Art. L321-4 for FR; LOE Art. 79 bis for ES)
- Crosswalk section included for FR and ES audits showing equivalences to US framework

## Examples
```
# US (default)
/dyslexia-audit ./my-reading-app
/dyslexia-audit "our Wilson Reading implementation"
/dyslexia-audit student_iep_draft.docx
/dyslexia-audit "our school's reading intervention program"
/dyslexia-audit "this EdTech product's accessibility features"
/dyslexia-audit "workplace accessibility policy"

# French locale
/dyslexia-audit student_pap.docx --locale fr
/dyslexia-audit "notre programme de soutien en lecture" --locale fr
/dyslexia-audit ./ecole-app --locale fr
/dyslexia-audit "politique RQTH de l'entreprise" --locale fr

# Spanish locale
/dyslexia-audit informe_psicopedagogico.docx --locale es
/dyslexia-audit "nuestro programa de atención a la diversidad" --locale es --region madrid
/dyslexia-audit ./edtech-app --locale es --region cataluna
/dyslexia-audit "política de adaptaciones EBAU" --locale es --region andalucia
```

## Example Output Path
```
my-reading-app/
├── audits/
│   └── Dyslexia-Compliance-Audit-my-reading-app-2026-04-03.md
├── src/
└── ...
```
