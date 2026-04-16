# dyslexia-support-skill

[![CI](https://github.com/justice8096/dyslexia-support-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/justice8096/dyslexia-support-skill/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A clinical and accommodation framework treating dyslexia as a **neurodevelopmental cognitive disorder** — a lifelong, brain-based difference in phonological and orthographic processing architecture — across the full lifespan: K-12, higher education, workplace, and adult contexts.

> **AI-Assisted Development**: This project was built with Claude AI assistance. See [audits/contribution-analysis.md](audits/contribution-analysis.md) for the full human-vs-AI attribution breakdown.

## Clinical Framing

Dyslexia is a **persistent neurodevelopmental cognitive disorder**, not a learning difficulty that resolves with sufficient instruction. The neuroscience is unambiguous:

- **Neural architecture** — Left temporoparietal cortex, visual word form area (VWFA), and inferior frontal gyrus show structural and functional differences (Shaywitz; Dehaene; Gabrieli et al.)
- **Clinical classification** — DSM-5 Specific Learning Disorder with impairment in reading (315.00); ICD-11 Developmental Learning Disorder with impairment in reading (6A03.0)
- **Lifespan persistence** — Phonological processing differences remain detectable into adulthood even after successful remediation

This distinction matters in practice. Accommodations must compensate for a **persistent cognitive processing difference**, not merely scaffold a temporary learning gap. This skill takes the two-track approach:

| Track | Target | Intervention |
|-------|--------|--------------|
| **Remediation** | Trainable skills (phonological awareness, decoding accuracy, fluency) | Structured literacy, Orton-Gillingham methodology |
| **Cognitive Prosthetics** | Persistent processing differences | Permanent assistive technology stack (TTS, STT, audiobooks, OCR) |

## What This Is

A Cowork plugin **and** standalone skill set that provides:

- **Remediation & Cognitive Prosthetics** — Evidence-based intervention plans grounded in structured literacy, Orton-Gillingham methodology, and IDA standards. Explicitly distinguishes remediation targets (trainable skills) from bypass targets (persistent deficits requiring permanent cognitive prosthetics: text-to-speech, speech-to-text, audiobooks via Learning Ally/Bookshare, OCR, spell-checkers, dyslexia-friendly fonts).
- **Standards & Regulatory Compliance** — Audit programs, IEPs, 504 plans, workplace policies, and tools against the applicable legal framework: IDA Knowledge and Practice Standards, IDEA (K-12), Section 504 (K-12 and higher ed), ADA Title I (workplace), ADA Title II (public colleges), ADA Title III (private colleges and public accommodations). Clinical frameworks: DSM-5, ICD-11.
- **Document Generation** — K-12 IEPs/504s, higher-ed disability services requests, workplace ADA Title I accommodation letters, clinical evaluation summaries, cognitive prosthetics prescriptions, and self-advocacy documentation across the lifespan.
- **Gap Analysis & Measure Creation** — Identify what's missing in dyslexia support tooling across education, clinical practice, workplace, and consumer technology. Evaluates gaps against legal frameworks, cognitive neuroscience evidence, and adult/workplace outcomes.

## Lifespan Coverage

| Life Stage | Regulatory Framework | Document Types |
|------------|---------------------|----------------|
| **K-12** | IDEA, Section 504, state dyslexia mandates | IEP, 504 Plan, PWN, RTI documentation |
| **Higher Education** | Section 504 (all institutions), ADA Title II (public), ADA Title III (private) | Disability services requests, faculty accommodation letters, testing modifications |
| **Workplace** | ADA Title I (employers ≥15 employees), Rehabilitation Act (federal contractors) | Reasonable accommodation requests, interactive process documentation, EEOC charges |
| **Public Services** | ADA Title II, Title III | Access requests, complaint letters to OCR |
| **Clinical** | DSM-5, ICD-11 | Evaluation summaries, diagnostic summary letters, cognitive prosthetics prescriptions |

## Quick Start

```bash
git clone https://github.com/justice8096/dyslexia-support-skill.git
cd dyslexia-support-skill
npm install
npm run build        # Build all 6 distribution formats
npm test             # Run 42 integration tests across 7 suites
npm run audit        # Security audit
```

### As a Cowork Plugin
Install the plugin in Cowork and the four skills + four commands become available automatically.

### As a Standalone Skill Set

```bash
git clone https://github.com/justice8096/dyslexia-support-skill.git
```

Point your skill configuration to any of:
- `skills/remediation-strategies/SKILL.md`
- `skills/standards-compliance/SKILL.md`
- `skills/document-generation/SKILL.md`
- `skills/gap-analysis/SKILL.md`

## Commands

| Command | Description |
|---------|-------------|
| `/dyslexia-audit` | Audit a program, tool, curriculum, or workplace policy against IDA standards and applicable law (IDEA/504/ADA) |
| `/generate-iep` | Generate IEP, 504 plan, ADA workplace accommodation request, or higher-ed disability services documentation |
| `/remediation-plan` | Create a two-track plan: remediation (structured literacy) + cognitive prosthetics (AT stack) |
| `/content-accessibility-check` | Audit educational, workplace, or consumer content for dyslexia-friendly design across 10 dimensions |

## Standards & Research Foundation

Grounded in:

**Clinical Frameworks**
- **DSM-5** — Specific Learning Disorder (315.00) with impairment in reading
- **ICD-11** — Developmental Learning Disorder (6A03.0) with impairment in reading

**Neuroscience**
- Shaywitz phonological deficit theory
- Dehaene visual word form area (VWFA) research
- Gabrieli et al. functional and structural neuroimaging
- Wolf & Bowers double-deficit hypothesis

**Instructional Standards**
- **IDA Knowledge and Practice Standards** (2018) — [dyslexiaida.org](https://dyslexiaida.org/kps-for-teachers-of-reading/)
- **Structured Literacy** — Six elements as defined by IDA and the National Center on Improving Literacy
- **Orton-Gillingham Approach** — [orton-gillingham.com](https://www.orton-gillingham.com/approach/)
- **Science of Reading** research literature

**Legal Frameworks**
- **IDEA** (Individuals with Disabilities Education Act) — K-12 special education
- **Section 504** of the Rehabilitation Act of 1973 — K-12 and higher education
- **ADA Title I** — Workplace accommodations
- **ADA Title II** — Public entities including public colleges
- **ADA Title III** — Private entities including private colleges and public accommodations
- **WCAG 2.1** AA — Extended for dyslexia-specific needs

## Target Audience

This skill set is designed for anyone supporting dyslexia across the lifespan:

- **Developers** building EdTech, workplace AT, and accessibility tools
- **Clinicians** — psychologists, speech-language pathologists, reading specialists
- **Special educators** and reading interventionists
- **Disability services professionals** in higher education
- **HR professionals** handling workplace accommodation requests
- **Self-advocates** navigating disclosure, accommodation requests, and cognitive prosthetics
- **Policy and compliance teams** auditing educational, workplace, or consumer systems

## Platform Support

This skill builds to 6 formats from a single source in `source/`: Claude Code Plugin, MCP Server, OpenAI Functions, n8n Node, Prompt Library, and CLI Audit Tool. Run `npm run build` to generate all formats in `dist/`.

## Project Structure

```
dyslexia-support-skill/
├── source/                  # Single source of truth
│   ├── manifest.json        # Central definition (4 skills, 4 commands)
│   ├── skills/              # Skill markdown files
│   ├── commands/            # Command markdown files
│   └── templates/           # Document templates
├── build.ts                 # Multi-format build system
├── test-build.ts            # 42-test integration suite (7 suites)
├── skills/                  # Cowork plugin skill directories
├── commands/                # Cowork plugin command files
├── examples/                # Sample audit reports
├── audits/                  # Security & compliance audit reports
├── sbom.cdx.json            # CycloneDX SBOM
├── SECURITY.md              # Vulnerability disclosure policy
└── .github/workflows/ci.yml # CI pipeline (Node 18/20/22)
```

## Disclaimer

Generated documents (IEPs, 504 plans, ADA accommodation letters, evaluation summaries, clinical summaries) are professional-quality templates that **require review and approval by qualified professionals**. They are starting points — not substitutes for licensed educators, psychologists, disability attorneys, HR professionals, or medical providers. Clinical diagnosis of dyslexia requires a licensed professional.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Areas where help is especially needed:

- State-specific dyslexia mandate data (US)
- International framework coverage (UK SpLD, Australian NDIS, EU disability directives)
- Additional evidence-based program profiles
- Clinical assessment instrument coverage beyond CTOPP-2/WRMT-III
- Workplace accommodation case studies
- Adult dyslexia resources and evidence
- Translations and multilingual support
- Validation studies for gap-analysis measures

## License

MIT
