---
description: Generate a comprehensive, legally-compliant accommodation document tailored to the individual's context and jurisdiction. **United States**: (1) IEP — K-12 special education with PLAAFP, SMART goals for phonological awareness/decoding/fluency/comprehension/writing, structured literacy-aligned services, cognitive prosthetics accommodations, LRE documentation; (2) 504 Plan — K-12 or higher education accommodations; (3) Workplace Accommodation Request — ADA Title I reasonable accommodation letter to employer/HR with documentation of functional impact, specific requested accommodations, and interactive process invitation; (4) Higher Ed Disability Services Request — university disability office documentation. **France**: PAP (Plan d'Accompagnement Personnalisé per Circulaire 2015-016 — four cycle templates), MDPH dossier support package for PPS request (Cerfa forms + bilans), demande d'aménagements d'examens (Brevet/Baccalauréat per Circulaire 2023-033), RQTH application support for adults entering workplace. **Spain**: Informe Psicopedagógico, ACNS documentation, EBAU/EvAU exam accommodation request, ACNEAE classification documentation. **Cross-jurisdiction**: clinical summary letters citing DSM-5/ICD-11 diagnoses. Includes comorbidity considerations (ADHD, dyscalculia, anxiety, APD, executive function).
argument-hint: <person-name> [--context=k12|higher-ed|workplace|adult-general] [--document-type=iep|504|ada-workplace-request|higher-ed-dsr|clinical-summary] [--dyslexia-type=phonological|surface|double-deficit|mixed] [--anxiety=none|mild|moderate|severe]
allowed-tools: [Read, Write, Edit]
---
# /generate-iep

Generate a dyslexia-focused Individualized Education Program (IEP).

## Usage
```
/generate-iep
```

The command will prompt for necessary student information.

## What This Command Does

1. **Gathers student information:**
   - Name, grade, school
   - Assessment results (CTOPP-2, WRMT, cognitive, language, achievement)
   - Current reading level and areas of deficit
   - Strengths and interests
   - Current services (if any)

2. **Generates a complete IEP** including:
   - Present Levels (PLAAFP) with impact statement
   - Measurable annual goals for each deficit area (SMART format)
   - Special education services with frequency, duration, location
   - Accommodations and modifications (classroom, testing, technology, homework)
   - Progress monitoring plan
   - IEP team composition (flags if dyslexia-knowledgeable member missing)

3. **Validates the IEP** against:
   - IDEA §300.320 requirements
   - IDA standards for goal alignment
   - Structured literacy element coverage

4. **Outputs** the IEP as a professional document (DOCX or PDF)

## Linguistic analysis support (optional)

When the `linguistics` MCP server is available, use its tools to make IEP materials
objective and grade-matched:
- `readability(text)` — set/verify the reading level of goal passages and accommodated materials (Flesch-Kincaid grade).
- `decodability(text)` — list irregular/non-decodable words to pre-teach; quantify decoding load for the PLAAFP.
- `syllabify(word)` / `pronounce(word)` — generate decoding and phonological-awareness practice items aligned to goals.
- `frequency(words)` — flag below-grade-frequency vocabulary as sight-word/vocab targets.

These inform **remediation targets** only; preserve the two-track framing (pair with bypass/AT accommodations).
Full procedures: `D:\linguistics-mcp\INTEGRATION-literacy-numeracy.md` (§1–2). English-only tools; for FR/ES see §4.

## Important Disclaimer
Generated IEPs are professional-quality templates that require review and approval by a qualified IEP team. They are starting points — not substitutes for professional judgment.

## Examples
```
/generate-iep
> Student: Alex, Grade 3
> CTOPP-2 PAQ: 72, WRMT Word ID: 78, ORF: 35 wpm (grade avg: 92)
> Deficits: phonological awareness, decoding, fluency
> Strengths: strong vocabulary, good listening comprehension
```
