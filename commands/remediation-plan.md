---
description: Create a two-track support plan — (1) structured-literacy / Orton-Gillingham remediation (Wilson, Barton, LiPS, Sonday, RAVE-O, Alphabetic Phonics) for trainable skills; (2) cognitive-prosthetics stack (TTS, STT, audiobooks, OCR, dyslexia-friendly fonts) for persistent processing differences. Lifespan-aware.
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
