---
name: gap-analysis
description: Systematic gap identification across the dyslexia cognitive support ecosystem, spanning education, clinical practice, workplace, and consumer technology — with cross-linguistic / cross-jurisdictional analysis for US/FR/ES. Identifies 12 critical gaps including retroactive vs. proactive accessibility, absence of personalized accommodation engines, passive vs. interactive assistive tools, fragmented tool ecosystems, disconnected progress monitoring, assessment-to-instruction pipeline breakdowns, practitioner implementation support gaps, missing dyslexia-specific UX design standards, workplace accommodation gaps, clinical-educational framing gaps, plus four cross-linguistic gaps: cross-linguistic assessment tool availability (CTOPP-2/WRMT vs. PROLEC-R/BELEC/L2MA-2/Timé3 by language), fluency-first intervention programs for transparent orthographies (Spanish), EdTech locale-awareness (FR/ES default settings, normed readability, phonics sequences), and legal framework crosswalk for internationally mobile families with DYS children. Includes pre-built measures: Dyslexia-Friendly Content Audit Checklist, Dyslexia UX Heuristics (12 heuristics extending Nielsen's 10), Cognitive Prosthetics Maturity Model, and cross-linguistic comparison matrix.
---
# Dyslexia Gap Analysis & Measure Creation Skill

## Purpose
Identify gaps in existing dyslexia support tools, assessments, standards, and practices — then create new measures, frameworks, or tools where none exist. This skill fills the "if it doesn't exist, build it" mandate.

> **Framing Note**: This analysis treats dyslexia as a neurodevelopmental cognitive disorder — a persistent difference in phonological and orthographic processing architecture (Shaywitz phonological deficit theory; Dehaene VWFA research; Gabrieli et al.) — not merely a learning disability that resolves with sufficient instruction. Gaps are evaluated against both the legal/educational framework (IDEA, Section 504, IDA KPS) and the cognitive neuroscience evidence. The most critical gaps are those where current practice assumes the deficit is temporary and remediable, when the evidence shows it is persistent and requires lifelong accommodation alongside targeted remediation.

## When to Use
Trigger this skill when the user mentions:
- "what's missing", "gap analysis", "gaps in dyslexia support"
- "create new measure", "build assessment", "design tool"
- "no existing tool for", "nothing exists for"
- "accessibility gap", "EdTech gap"
- "universal design for dyslexia", "dyslexia-friendly design"
- "create a framework", "design a standard"
- "dyslexia in tech", "developer accessibility"
- "measure doesn't exist", "need a new checklist"
- "content accessibility audit", "readability for dyslexia"
- "cross-linguistic", "multilingual dyslexia", "assessment in French", "assessment in Spanish"
- "French assessment tools", "Spanish assessment tools", "outils d'évaluation", "herramientas de evaluación"
- "international comparison", "France US comparison", "Spain US comparison"
- "PROLEC-R", "BELEC", "L2MA-2", "Timé3", "BMT-i", "TEDI-MATH"
- "fluency norms French Spanish", "palabras por minuto", "mots par minute"
- "international family", "expat dyslexia", "moving with IEP", "PAP to IEP", "ACNS to 504"

## Known Gaps in the Dyslexia Support Ecosystem

### Gap 1: Retroactive vs. Proactive Accessibility
**Problem:** Content is created without accessibility consideration. Students must request accommodations after struggling.
**Opportunity:** Build accessibility into authoring tools and content creation workflows from the start. Universal design at the source.
**Potential Measures to Create:**
- Dyslexia-Friendly Content Authoring Checklist
- Content Accessibility Score (CAS) for educational materials
- Readability index calibrated for dyslexic readers (beyond Flesch-Kincaid)

### Gap 2: No Personalized Accommodation Engine
**Problem:** One-size-fits-all accommodations ignore individual dyslexia profiles. Some students need phoneme cues; others need morphological structure highlighting.
**Opportunity:** AI/ML-powered accommodation recommendation based on assessment data and learning profile.
**Potential Measures to Create:**
- Dyslexia Profile Classification Schema (subtypes mapped to accommodation sets)
- Accommodation Effectiveness Rating Scale
- Personalized Accommodation Recommendation Algorithm spec

### Gap 3: Passive vs. Interactive Assistive Tools
**Problem:** Most tools are passive (read-aloud, spell-check) rather than interactive teaching tools.
**Opportunity:** Real-time coaching, phonological cues, morphological breakdowns, fluency pacing.
**Potential Measures to Create:**
- Interactive Assistive Tool Maturity Model
- Real-Time Support Feature Taxonomy
- Scaffolding Intensity Scale for assistive technology

### Gap 4: Fragmented Tool Ecosystem
**Problem:** Students use many disconnected tools across platforms. Poor integration, inconsistent UX.
**Opportunity:** Unified accessibility platform or interoperability standards.
**Potential Measures to Create:**
- Dyslexia Tool Integration Standard (API spec)
- Cross-Platform Accommodation Portability Format
- User Experience Consistency Scorecard

### Gap 5: Disconnected Progress Monitoring
**Problem:** IEP progress monitoring is often manual and disconnected from learning software.
**Opportunity:** Automatic data collection linking learning activity to IEP goal progress.
**Potential Measures to Create:**
- IEP Goal-to-Software Skill Mapping Schema
- Automated Progress Data Collection Standard
- Learning Analytics Dashboard Specification for Dyslexia

### Gap 6: Assessment-to-Instruction Pipeline
**Problem:** Assessment data rarely drives software-based instructional recommendations.
**Opportunity:** Software that ingests assessment profiles and adapts instruction.
**Potential Measures to Create:**
- Assessment-Instruction Alignment Matrix
- Adaptive Instruction Decision Tree based on CTOPP-2/WRMT profiles
- Structured Literacy Element Deficit Mapping Tool

### Gap 7: Teacher Implementation Support
**Problem:** Teachers lack training on effective dyslexia instruction and tool implementation.
**Opportunity:** Decision support systems and embedded professional development.
**Potential Measures to Create:**
- Teacher Dyslexia Readiness Assessment
- Implementation Fidelity Checklist (per program)
- Professional Development Needs Analysis Tool

### Gap 8: Dyslexia-Specific UX Design Standards
**Problem:** No widely adopted UX design standard exists specifically for dyslexic users.
**Opportunity:** Create a dyslexia-specific design system beyond WCAG.
**Potential Measures to Create:**
- Dyslexia UX Design Checklist (typography, layout, navigation, color, interaction)
- Dyslexia Usability Heuristics (extending Nielsen's for dyslexic users)
- Font and Typography Accessibility Scoring for dyslexia

### Gap 9: Cross-Linguistic Assessment Tool Availability
**Problem:** The dominant dyslexia assessment instruments (CTOPP-2, WRMT, DIBELS, RAVE-O) are normed on English-speaking populations and cannot be validly applied to French or Spanish learners. French- and Spanish-normed instruments are less widely known by practitioners and under-integrated in EdTech.
**Opportunity:** Cross-linguistic assessment tool libraries; automatic locale-detection in EdTech platforms to surface the appropriate normed measures.
**Assessment tool gap by locale:**

| Assessment Domain | US (English) | France | Spain |
|------------------|-------------|--------|-------|
| Phonological processing | CTOPP-2 (strong, wide use) | Batterie phonologique (less standardized); BMT-i screening | PRODISLEX protocols; no nationally standardized phonological processing battery equivalent to CTOPP-2 |
| Reading accuracy | WRMT-III, WJ-IV | BELEC, L2MA-2, Timé3 (less widely available commercially) | PROLEC-R (widely used; good norms) |
| Reading fluency | DIBELS, ORF probes | No widely adopted national fluency norm set; significant gap | PROLEC-R (includes fluency); LEE; TECLE |
| Cognitive/IQ | WISC-V (US norms) | WISC-V (French norms available) | WISC-V (Spanish norms available) |
| Spelling/writing | TWS, WIAT-III | ORTHO-3, EO3 | PROESC |
| Dyscalculia | KeyMath-3, WIAT-III | TEDI-MATH, Zareki-R | TEDI-MATH (Spanish adaptation); fewer validated options |
| Adult assessment | Nelson-Denny, TOWRE-2, WAIS-IV | Alouette adult version, ECLA-16+, WAIS-IV FR | PROLEC-SE for older students; few adult-normed dyslexia batteries |

**Potential Measures to Create:**
- Cross-Linguistic Assessment Tool Selector (locale-aware guide to appropriate instruments)
- Fluency Norm Database for French and Spanish (palabras por minuto / mots par minute grade-level norms)
- International Dyslexia Assessment Equivalency Matrix (mapping FR/ES assessments to CTOPP-2/WRMT equivalents for cross-border practitioners)

### Gap 10: Fluency-First Intervention Programs for Transparent Orthographies
**Problem:** Most commercially available structured literacy programs (Wilson, Barton, LiPS, Sonday) are designed for English — an opaque orthography where accuracy is the primary deficit. Spanish (and to a lesser extent Portuguese and Italian) requires fluency-first intervention, but validated fluency-focused programs in these languages are scarce commercially.
**Opportunity:** Fluency-focused intervention curriculum for Spanish and other transparent orthographies; repeated reading program banks with Spanish-normed wpm targets.
**Potential Measures to Create:**
- Transparent Orthography Fluency Intervention Framework (program design principles for Spanish, Italian, Portuguese)
- Spanish Reading Fluency Goal Bank (SMART goals with palabras por minuto targets by grade and term)
- Fluency Progress Monitoring Probe Set — Spanish (equivalent to DIBELS in English)

### Gap 11: EdTech Locale-Awareness for Dyslexia
**Problem:** EdTech tools for dyslexia (TTS, font customization, phonics apps) are predominantly built for English. French and Spanish users encounter English-centric default settings, English-normed readability algorithms, and English-optimized phonics sequences. The cognitive prosthetics layer (v1.2.0 framing) suffers from the same English bias.
**Opportunity:** Locale-aware dyslexia EdTech: language-specific phonics sequences, locale-appropriate TTS voices, readability indices calibrated for French/Spanish, UI in the target language, cognitive-prosthetic AT stacks adapted per locale (FR: Antidote, Vocale Presse; ES: StilusNet, Vozme).
**Potential Measures to Create:**
- Dyslexia EdTech Locale-Readiness Scorecard (does the product support FR/ES adequately?)
- French/Spanish Phonics Sequence Standard (the correct instructional sequence for each language's grapheme-phoneme correspondences)
- Multilingual Readability Index for Dyslexia (extending Flesch-Kincaid concepts to French/Spanish learner needs)
- Locale-Aware Cognitive Prosthetics AT-Stack Standard

### Gap 12: Legal Framework Crosswalk Tool for Internationally Mobile Families
**Problem:** Families who move between countries (e.g., US expats in France, Spanish families in the US, French-Spanish families in the EU) have no systematic tool for understanding how their child's existing plans (IEP, PAP, ACNS) translate into the new country's framework and what steps are needed to re-establish equivalent supports. The same applies to adults moving between workplaces under different disability regimes (ADA Title I vs. RQTH vs. RDL 1/2013 certificado de discapacidad).
**Opportunity:** International SEN (Special Educational Needs) and workplace-accommodation portability guide with country-specific action plans.
**Potential Measures to Create:**
- International DYS Plan Portability Guide (US → FR, FR → US, ES → US, FR → ES, etc.)
- Cross-Country Accommodation Equivalency Matrix (which accommodations survive a move, which need to be re-established)
- New Country Onboarding Checklist for Families Moving Internationally with a DYS Child
- Adult Workplace Disability Status Portability Map (ADA, RQTH, certificado de discapacidad)

---

## Cross-Linguistic Gap Analysis

When conducting a gap analysis across locales (US, FR, ES), apply this extended workflow on top of the base Gap Analysis Process below.

### Cross-Linguistic Scope Questions
- **Orthographic depth**: What is the orthographic transparency of the target language? (English: opaque; French: semi-opaque; Spanish: transparent) — this determines which deficits dominate and which interventions are appropriate.
- **Assessment norm availability**: Are validated, locally-normed assessment instruments available for the target language and population? (See Gap 9 above)
- **Intervention program availability**: Are evidence-based intervention programs available in the target language? Are they normed appropriately?
- **Legal framework adequacy**: Does the local legal framework require and support the level of intervention appropriate for the student's orthographic context?
- **Professional training**: Are there trained specialists (orthophonistes, PT specialists, reading specialists) with language-specific expertise available?
- **Cognitive prosthetics layer**: Are locale-appropriate AT tools available (Antidote/StilusNet vs Grammarly; Vocale Presse/Vozme vs Read&Write)?
- **Adult/workplace coverage**: Does the legal framework extend persistent supports beyond K-12 (ADA Title I + ADA III in US; RQTH + AGEFIPH/FIPHFP in FR; RDL 1/2013 in ES)?

### Cross-Linguistic Comparison Matrix

When comparing a program or EdTech product across locales, assess:

| Dimension | US (English) | France (French) | Spain (Spanish) |
|-----------|-------------|----------------|----------------|
| Primary deficit targeted | Accuracy (decoding) | Both accuracy and spelling | Fluency (speed) |
| Phonological instruction focus | Phoneme manipulation | Phoneme + syllable; nasal vowels; silent letters | Syllable-level; onset-rime less central |
| Morphological instruction need | Moderate | High (opaque spelling requires morphology) | Moderate |
| Fluency instruction priority | Secondary | Secondary | PRIMARY |
| Spelling instruction complexity | High | Very high (many homophone/morphological rules) | Moderate (mainly b/v, c/s/z, h, tilde) |
| TTS effectiveness | High (English TTS mature) | Moderate (French TTS adequate) | High (Spanish TTS good) |
| Assessment tool availability | Extensive | Limited | Moderate |
| Intervention program availability | Extensive | Moderate | Limited |
| K-12 legal framework | IDEA + 504 (federal) | Loi 2005-102 + PAP/PPS | LOE/LOMLOE + ACNS |
| Higher-ed legal framework | 504 + ADA II/III | Service handicap (institution-level) | Oficina de atención a la diversidad |
| Workplace legal framework | ADA Title I (anti-discrimination) | RQTH + AGEFIPH/FIPHFP (funded accommodations) | RDL 1/2013 (quota + non-discrimination) |

### Known Assessment Tool Gaps by Locale

**France-specific gaps:**
- No French equivalent of DIBELS (oral reading fluency norms) with national standardization
- No single widely-adopted phonological processing battery equivalent to CTOPP-2 for French
- Limited availability of French-normed dyscalculia batteries outside clinical settings (TEDI-MATH is available but less widely used in schools than in clinical settings)
- BMT-i is useful for screening but not designed for detailed intervention planning
- Adult-normed dyslexia batteries are limited; clinicians often adapt children's tools or use Alouette adult version

**Spain-specific gaps:**
- No nationally standardized phonological processing battery equivalent to CTOPP-2 (PRODISLEX protocols partially fill this for screening)
- Limited fluency norm data outside research settings — practitioners often rely on informal wpm estimates
- Dyscalculia assessment is less well-defined nationally; significant regional variation in diagnostic criteria
- Assessment tools for bilingual/trilingual students (Catalan-Castilian, Basque-Castilian) are limited; practitioners often default to Castilian-only assessment
- Adult-normed dyslexia tools are limited; certificado de discapacidad assessment relies on functional impact rather than dyslexia-specific batteries

**Cross-locale gaps:**
- No validated instrument for comparing reading profiles across English/French/Spanish for internationally mobile students
- No consensus on how to interpret a WISC-V profile obtained in one country when the student moves to another (standardization sample differences)
- No formal protocol for translating an IEP (US) into a PAP (FR) or ACNS (ES) — families navigate this independently
- No standardized workplace-accommodation portability guide for adults moving between ADA / RQTH / RDL 1/2013 regimes

## Gap Analysis Process

When conducting a gap analysis, follow this workflow:

### Step 1: Define Scope
- What domain? (assessment, instruction, technology, documentation, policy)
- What population? (students, educators, parents, developers)
- What context? (K-12, higher ed, workplace, clinical)

### Step 2: Inventory Existing Resources
- List current tools, standards, assessments, and practices
- Note their coverage, limitations, and evidence base
- Identify the "last mile" problems (where things break down in practice)

### Step 3: Identify Gaps
- Compare existing resources against IDA standards, IDEA requirements, and structured literacy best practices
- Map gaps to the known gap categories above (or identify new ones)
- Prioritize by impact (how many people affected, severity of consequence)

### Step 4: Design New Measures
When creating a new measure, framework, or tool:

```
NEW MEASURE SPECIFICATION

Name: [Descriptive name]
Type: [Checklist / Scale / Framework / Algorithm / Standard / Schema]
Purpose: [What gap does this fill?]
Target Users: [Who will use this?]
Grounding: [What research/standards is this based on?]

Components:
├── [Component 1]: [Description]
├── [Component 2]: [Description]
└── [Component N]: [Description]

Scoring / Interpretation:
├── How to administer or apply
├── Scoring criteria or classification rules
└── Interpretation guidelines

Validation Plan:
├── Face validity: Expert review by [whom]
├── Content validity: Alignment with [standards]
├── Pilot testing: [Plan]
└── Iteration: [Feedback incorporation process]

Output Format: [How results are presented]
Integration: [How this connects to existing tools/workflows]
```

### Step 5: Validate and Iterate
- Expert review (dyslexia specialists, educators, researchers)
- Pilot with target users
- Collect feedback and refine
- Document evidence of effectiveness

## Pre-Built Measure Templates

### Dyslexia-Friendly Content Audit Checklist
A checklist developers can use to evaluate whether digital content is accessible for dyslexic users:

**Typography & Layout**
- [ ] Sans-serif font used (e.g., Arial, Verdana, Open Dyslexic, Lexie Readable)
- [ ] Font size ≥ 14px (body text)
- [ ] Line spacing ≥ 1.5x
- [ ] Letter spacing slightly increased (0.12em+)
- [ ] Word spacing slightly increased (0.16em+)
- [ ] Left-aligned text (no full justification)
- [ ] Short line length (50-70 characters)
- [ ] Adequate paragraph spacing
- [ ] No italics for emphasis (use bold sparingly)
- [ ] High contrast but NOT pure black on pure white (use off-white: #FFFBF0 or similar)

**Content Structure**
- [ ] Short paragraphs (3-4 sentences max)
- [ ] Clear headings with visual hierarchy
- [ ] Bullet points for lists (not dense prose)
- [ ] Key terms defined on first use
- [ ] Consistent terminology throughout
- [ ] Plain language (aim for grade 6-8 readability)
- [ ] Active voice preferred

**Navigation & Interaction**
- [ ] Table of contents / section navigation available
- [ ] Current location indicator (breadcrumbs, highlights)
- [ ] Search functionality
- [ ] Bookmarking capability
- [ ] Text-to-speech compatible (semantic HTML)
- [ ] User can customize font, size, spacing, colors

**Media & Alternatives**
- [ ] Images support (not replace) text content
- [ ] Audio alternatives available
- [ ] Video captions provided
- [ ] Diagrams include text descriptions
- [ ] No content conveyed solely through text styling

### Dyslexia UX Heuristics (extending Nielsen's 10)
1. **Visibility of system status** + reading progress indicators
2. **Match between system and real world** + age-appropriate reading level
3. **User control and freedom** + customizable display settings
4. **Consistency and standards** + consistent navigation and terminology
5. **Error prevention** + spell-check, auto-suggest, confirmation dialogs
6. **Recognition rather than recall** + visual cues, icons alongside text
7. **Flexibility and efficiency** + keyboard shortcuts, voice commands, shortcuts
8. **Aesthetic and minimalist design** + reduced visual clutter, adequate whitespace
9. **Help users recognize, diagnose, recover from errors** + clear, simple error messages
10. **Help and documentation** + multimedia help (video, audio, not just text)
11. **Reading support** (NEW) + built-in TTS, syllable breaking, morpheme highlighting
12. **Cognitive load management** (NEW) + chunked content, progress saving, break reminders

## Behavior Guidelines

- When no existing measure or tool addresses the user's need, design one from scratch using the specification template.
- Ground all new measures in IDA standards, structured literacy research, or established accessibility frameworks (WCAG, POUR).
- Be transparent that new measures need validation — mark them as "proposed" until tested.
- Encourage user testing with people who have dyslexia at every stage.
- Consider intersectionality: many people with dyslexia also have dyscalculia, dysgraphia, or ADHD.
- Prioritize practical utility over theoretical completeness.
- Output in formats developers can directly integrate (JSON schemas, API specs, checklists).

## Output Formats
- Gap analysis reports (Markdown, DOCX, PDF)
- New measure specifications (Markdown, JSON Schema)
- Checklists and scoring rubrics
- API specifications and data schemas
- Design system documentation
- Framework diagrams (Mermaid, SVG)
