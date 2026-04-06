# /content-accessibility-check

Audit digital content for dyslexia-friendly design and readability.

## Usage
```
/content-accessibility-check [file or URL]
```

## What This Command Does

1. **Analyzes the target content** for dyslexia accessibility across four domains:

   **Typography & Layout**
   - Font family (sans-serif preferred)
   - Font size (≥14px body)
   - Line spacing (≥1.5x)
   - Letter and word spacing
   - Text alignment (left-aligned, no justification)
   - Line length (50-70 characters)
   - Contrast (high but not pure black on white)

   **Content Structure**
   - Paragraph length (3-4 sentences max)
   - Heading hierarchy and clarity
   - Use of lists vs. dense prose
   - Plain language and readability level
   - Consistent terminology
   - Active voice usage

   **Navigation & Interaction**
   - Table of contents / section navigation
   - Location indicators
   - Search and bookmark features
   - Text-to-speech compatibility (semantic HTML)
   - User customization options

   **Media & Alternatives**
   - Audio alternatives
   - Image support for text
   - Captions on video
   - Text descriptions for diagrams

2. **Scores each domain** (Pass / Partial / Fail)

3. **Generates a report** with:
   - Overall dyslexia accessibility score
   - Domain-by-domain breakdown
   - Specific issues found
   - Prioritized recommendations
   - Before/after examples where applicable

4. **Applies the Dyslexia UX Heuristics** (12 heuristics extending Nielsen's 10)

## Output
An accessibility audit report with scores and actionable fixes.

## Examples
```
/content-accessibility-check lesson_plan.html
/content-accessibility-check https://example.com/reading-app
/content-accessibility-check student_worksheet.pdf
/content-accessibility-check my-react-component.jsx
```
