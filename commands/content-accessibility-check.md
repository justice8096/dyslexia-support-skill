---
description: Audit educational, workplace, or consumer content for dyslexia-friendly design across 10 dimensions: typography (font family, size, spacing, weight, user control; scored on legibility features, not on specialty dyslexia fonts, which show no pooled benefit per Azzarello et al. 2026), readability (Flesch-Kincaid level for English, Flesch-Szigriszt or Crawford for Spanish, Kandel/Moles for French; sentence length, cognitive load), color and contrast (WCAG 2.1 AA as the legal floor under the ADA Title II web rule and EN 301 549, WCAG 2.2 AA recommended, off-white backgrounds, low-contrast pairs), layout (whitespace, line length 45-65 characters, left-alignment), cognitive load (chunking, scaffolding, working memory demands), navigation predictability, assistive technology compatibility (screen reader semantic HTML, text-to-speech parseability, proper heading hierarchy), multimedia accessibility (captions, transcripts, audio descriptions), UDL principles application, and cognitive accommodation integration. **Locale-aware checks**: FR - diacritics rendering (é, è, ê, ë, à, â, ç, î, ï, ô, œ, ù, û, ü, ÿ) at body size, ligatures (œ), French dyslexia accommodation norms (sans-serif ≥14pt per Circulaire 2015-016 practice), prohibited full justification per PAP guidance, European Accessibility Act scope (ordonnance 2023-859); ES - tilde/accent rendering (á, é, í, ó, ú, ü, ñ, ¿, ¡), rate-supportive design priority (Spanish is transparent - speed deficit dominates), PAU exam content checked against Arial 16pt + 1.5 line spacing and the RD 534/2024 no-grade-reduction rule, flag automated spelling-penalty grading systems, European Accessibility Act scope (Ley 11/2023). Applies to K-12 textbooks, higher-ed courseware, workplace training, consumer apps, and government/healthcare communications.
argument-hint: <content-name> [--content-type=textbook|courseware|website|webapp|mobile-app|document|video|workplace-training|government-form] [--format=pdf|html|text|video|mixed|docx|epub] [--target-audience=elementary|middle|high|college|adult-employee|general-public] [--depth=quick|standard|comprehensive]
allowed-tools: [Read, Glob, Grep, Write]
---
# /content-accessibility-check

Audit digital content for dyslexia-friendly design and readability, with locale-aware checks for English, French, and Spanish typography and orthography.

## Usage
```
/content-accessibility-check [file or URL] [--locale us|fr|es]
```

**`--locale`** (default: `us`):
- `us` — English-focused checks: Flesch-Kincaid readability, English typography norms, ADA Title II web rule (WCAG 2.1 AA; compliance 26 April 2027 for entities serving 50,000+, 26 April 2028 for smaller entities) for public-sector and public-education content
- `fr` — French diacritic rendering checks (é, è, ê, ë, à, â, ç, î, ï, ô, œ, ù, û, ü, ÿ), ligature integrity (œ), French dyslexia accommodation norms (sans-serif ≥14pt per Circulaire 2015-016 practice; OpenDyslexic permitted on request, not required), prohibited full justification, Kandel/Moles readability index, European Accessibility Act scope check for consumer apps and e-books (ordonnance 2023-859, in application since 28 June 2025)
- `es` — Spanish tilde/accent rendering (á, é, í, ó, ú, ü, ñ, ¿, ¡), PAU exam content standards (Arial 16pt + 1.5 line spacing; RD 534/2024 and regional acuerdos; EBAU/EvAU are legacy names), fluency-supportive design priority (Spanish is transparent — fluency deficit dominates), automated spelling-penalty grading flag, Flesch-Szigriszt/Crawford readability index, European Accessibility Act scope check (Ley 11/2023, obligations since 28 June 2025)

## What This Command Does

1. **Analyzes the target content** for dyslexia accessibility across four domains:

   **Typography & Layout**
   - Font family (sans-serif preferred; the reader can change it). Do not fail content for not using a specialty dyslexia font: Azzarello et al. (Annals of Dyslexia, 2026; 15 studies, N=688) found no pooled effect of OpenDyslexic/Dyslexie on reading speed or accuracy (g = -0.04). Score the measurable features below instead
   - Font size (≥14px body)
   - Line spacing (≥1.5x)
   - Letter and word spacing
   - Text alignment (left-aligned, no justification)
   - Line length (50-70 characters)
   - Contrast (high but not pure black on white)
   - **[FR/ES locale]** Diacritics rendering — font must support full French or Spanish diacritic character sets at body text size (é, è, ê, ë, à, â, ç, œ for French; á, é, í, ó, ú, ü, ñ for Spanish); diacritics often render poorly in OpenDyslexic at smaller sizes
   - **[FR/ES locale]** Orthographic transparency note: Spanish is a transparent orthography (dyslexia = fluency deficit, not accuracy deficit) — design should reduce time pressure and support reading pace, not just decoding cues; French is semi-opaque — both decoding and spelling supports are relevant

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
   - User customization options (font, size, spacing, theme)
   - WCAG 2.1 AA conformance as the legal floor for US public-sector / public-education content (ADA Title II rule) and for EU-market consumer content (EN 301 549 v3.2.1 under the European Accessibility Act); WCAG 2.2 AA as the recommended target (EN 301 549 v4.1.1, published September 2026, not yet cited in the Official Journal)

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

## Locale-Specific Checks

**locale=fr (French):**
- Verifies that accent marks (é, è, ê, ë, à, â, ç, î, ï, ô, œ, ù, û, ü, ÿ) render correctly at body size in the chosen font
- Checks that ligatures (œ in particular) are not broken
- Notes that French dyslexia accommodation practice under Circulaire 2015-016 uses a sans-serif ≥14pt (Arial by default; OpenDyslexic on request only, no demonstrated benefit)
- Flags consumer apps and e-books sold in France that fall under the European Accessibility Act (ordonnance 2023-859 / décret 2023-931, in application since 28 June 2025) and checks them against EN 301 549
- Flags use of full justification (text-align: justify) — prohibited in French PAP accommodation guidance
- Recommends French-language TTS engines (Vocale Presse, Dys@Dom) over English-only TTS

**locale=es (Spanish):**
- Verifies that tilde (á, é, í, ó, ú, ü, ñ, ¿, ¡) renders correctly at body size
- Notes that Spanish dyslexia is primarily a fluency deficit — evaluate whether the content design supports reading pace (e.g., line length, spacing, chunk size) more than decoding cues
- PAU exam accommodation guidance (RD 534/2024 plus the regional acuerdo) specifies Arial 16pt, 1.5 line spacing, and often DIN A3 — checks assessment/exam content against this standard; flags any grading rule that would let an adaptation lower the grade (prohibited by RD 534/2024 art. 3.2)
- Flags orthographic error penalization in content (e.g., automated spelling-penalty grading systems) as a specific concern for Spanish EdTech
- Flags consumer apps and e-books sold in Spain that fall under Ley 11/2023 (European Accessibility Act) and checks them against EN 301 549
- Recommends Spanish-language TTS engines (Vozme, ReadSpeaker Spanish) over English-only TTS

## Output
An accessibility audit report with scores and actionable fixes. For FR/ES audits, the report includes a typography/diacritic compliance section and locale-specific recommendations.

## Examples
```
# US (default)
/content-accessibility-check lesson_plan.html
/content-accessibility-check https://example.com/reading-app
/content-accessibility-check student_worksheet.pdf
/content-accessibility-check my-react-component.jsx

# French locale
/content-accessibility-check cahier_eleve.pdf --locale fr
/content-accessibility-check https://example.fr/dyslexie-app --locale fr
/content-accessibility-check sujet_bac_2026.pdf --locale fr

# Spanish locale
/content-accessibility-check material_aula.html --locale es
/content-accessibility-check examen_pau_madrid.pdf --locale es
/content-accessibility-check app-dislexia-es.jsx --locale es
```
