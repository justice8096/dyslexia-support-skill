---
description: Create a comprehensive support plan with TWO parallel tracks, with locale-aware program selection: (1) **Remediation track** — structured literacy instruction addressing trainable skills via the six elements (phonology, sound-symbol association, syllable instruction, morphology, syntax, semantics) and OG principles (multisensory, explicit, diagnostic/prescriptive, sequential/cumulative, individualized), implemented through evidence-based programs (US: Wilson, Barton, LiPS, Sonday, RAVE-O, Alphabetic Phonics; FR: Méthode Borel-Maisonny, Chassymo, ERCOLE, ITECO — typically delivered by orthophoniste with prescription; ES: PRODISLEX, LECTOESCRIPTURA, fluency-first programs reflecting Spanish transparent orthography); (2) **Cognitive prosthetics track** — permanent assistive technology stack addressing persistent processing differences (text-to-speech, speech-to-text, audiobook access via Learning Ally/Bookshare/Vocale Presse FR/Audible ES, OCR tools, spell/grammar checkers in target language, dyslexia-friendly fonts, reading rulers). Includes lesson templates for remediation track, AT setup and training for prosthetics track, progress monitoring for both, and lifespan adaptations (K-12 through adult/workplace). Locale-aware orthographic context: English (opaque — accuracy-dominant), French (semi-opaque — morphological-spelling-heavy), Spanish (transparent — fluency-dominant).
argument-hint: <person-name> [--context=k12|higher-ed|workplace|adult-general] [--duration=8-weeks|12-weeks|16-weeks|1-year|ongoing] [--intensity=light|moderate|intensive] [--focus=phonological-awareness|phonics|decoding|fluency|comprehension|writing|cognitive-prosthetics-only] [--program=wilson|barton|lindamood-bell|sonday|rave-o|alphabetic-phonics]
allowed-tools: [Read, Write, Edit]
---
# /remediation-plan

Create an evidence-based remediation plan for a student with dyslexia.

## Usage
```
/remediation-plan
```

The command will prompt for student profile information.

## What This Command Does

1. **Gathers student profile:**
   - Assessment data (phonological processing, reading, spelling, fluency)
   - Current grade and reading level
   - Severity of deficits
   - Previous interventions attempted
   - Available resources and constraints (time, staffing, programs)

2. **Analyzes the profile** against structured literacy elements to identify:
   - Primary deficit areas
   - Secondary deficit areas
   - Strengths to leverage
   - Appropriate intervention intensity

3. **Generates a remediation plan** including:
   - Student profile summary
   - Measurable goals with baselines and targets
   - Recommended program/methodology with rationale
   - Structured lesson plan template (review → new learning → guided practice → application → assessment)
   - Multisensory techniques for each targeted skill
   - Materials and resources list
   - Session schedule (frequency, duration, grouping)
   - Progress monitoring protocol with decision rules
   - Accommodation integration recommendations
   - Home practice suggestions

4. **Recommends specific programs** based on the student's profile:
   - Wilson Reading System for word-level deficits (grades 2-12)
   - Barton for flexible delivery / paraprofessional use
   - Lindamood-Bell (LiPS) for phonological processing weaknesses
   - RAVE-O as a fluency supplement for accurate-but-slow readers
   - Sonday for digital or traditional settings

## Output
A comprehensive remediation plan document (Markdown, DOCX, or PDF).

## Examples
```
/remediation-plan
> Grade 5 student, reading at grade 2 level
> CTOPP-2: PAQ 68, RNQ 75
> Previous: Fundations in classroom (insufficient for this profile)
> Available: 45 min daily pull-out, trained Wilson instructor
```
