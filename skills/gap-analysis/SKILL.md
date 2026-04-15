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
