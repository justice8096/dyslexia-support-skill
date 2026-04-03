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
