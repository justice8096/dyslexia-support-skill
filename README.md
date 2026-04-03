# dyslexia-support-skill

Evidence-based dyslexia standards compliance, remediation strategies, document generation, and gap analysis — built for developers creating accessibility and EdTech tools.

## What This Is

A Cowork plugin **and** standalone skill set that provides:

- **Remediation Strategies** — Evidence-based intervention plans grounded in structured literacy, Orton-Gillingham methodology, and IDA standards
- **Standards Compliance** — Audit programs, IEPs, 504 plans, and tools against IDEA, Section 504, and IDA Knowledge and Practice Standards
- **Document Generation** — Create professional IEPs, 504 plans, progress reports, accommodation letters, screening checklists, and evaluation summaries
- **Gap Analysis & Measure Creation** — Identify what's missing in dyslexia support tooling and create new measures, frameworks, and standards where none exist

## Quick Start

### As a Cowork Plugin
Install the plugin in Cowork and the four skills + four commands become available automatically.

### As a Standalone Skill Set
Clone this repo and reference the SKILL.md files from your Claude Code or agent configuration:

```bash
git clone https://github.com/justice8096/dyslexia-support-skill.git
```

Point your skill configuration to any of:
- `skills/remediation-strategies/SKILL.md`
- `skills/standards-compliance/SKILL.md`
- `skills/document-generation/SKILL.md`
- `skills/gap-analysis/SKILL.md`

## Skills

### Remediation Strategies
Creates intervention plans using structured literacy's six elements (phonology, sound-symbol association, syllable instruction, morphology, syntax, semantics) and Orton-Gillingham principles (multisensory, explicit, diagnostic/prescriptive, sequential/cumulative, individualized).

Includes reference data for: Wilson Reading System, Barton, Lindamood-Bell (LiPS), Sonday, RAVE-O, and Alphabetic Phonics.

### Standards Compliance
Audits against three standards frameworks:
- **IDA Knowledge and Practice Standards** (2018) — 5 domains covering foundation concepts, reading profiles, assessment, structured literacy teaching, and ethics
- **IDEA** — IEP requirements, FAPE, evaluation standards, team composition, procedural safeguards
- **Section 504** — Accommodation requirements, eligibility differences from IDEA, plan compliance

### Document Generation
Templates and generators for:
- Individualized Education Programs (IEPs)
- Section 504 Accommodation Plans
- Progress Monitoring Reports
- Accommodation Letters
- Dyslexia Screening Checklists
- Psychoeducational Evaluation Summaries
- Prior Written Notice (PWN)
- RTI/Intervention Documentation

### Gap Analysis & Measure Creation
Identifies 8 major gaps in the current dyslexia support ecosystem and provides frameworks for creating new measures:
1. Retroactive vs. proactive accessibility
2. No personalized accommodation engine
3. Passive vs. interactive assistive tools
4. Fragmented tool ecosystem
5. Disconnected progress monitoring
6. Assessment-to-instruction pipeline
7. Teacher implementation support
8. Missing dyslexia-specific UX design standards

Includes pre-built measures: Dyslexia-Friendly Content Audit Checklist and Dyslexia UX Heuristics (12 heuristics extending Nielsen's 10).

## Commands

| Command | Description |
|---------|-------------|
| `/dyslexia-audit` | Run a standards compliance audit on a program, document, or tool |
| `/generate-iep` | Generate a dyslexia-focused IEP from student profile data |
| `/remediation-plan` | Create an evidence-based remediation plan |
| `/content-accessibility-check` | Audit content for dyslexia-friendly design |

## Standards & Research Foundation

This skill set is grounded in:

- **IDA Knowledge and Practice Standards** (2018 Edition) — [dyslexiaida.org](https://dyslexiaida.org/kps-for-teachers-of-reading/)
- **Structured Literacy** — The six elements as defined by IDA and the National Center on Improving Literacy
- **Orton-Gillingham Approach** — [orton-gillingham.com](https://www.orton-gillingham.com/approach/)
- **IDEA** (Individuals with Disabilities Education Act) — [ed.gov](https://www.ed.gov/laws-and-policy/individuals-disabilities/idea)
- **Section 504** of the Rehabilitation Act of 1973
- **Science of Reading** research literature
- **WCAG 2.1** AA accessibility guidelines (extended for dyslexia-specific needs)

## Project Structure

```
dyslexia-support-skill/
├── plugin.json                          # Cowork plugin manifest
├── README.md
├── LICENSE
├── skills/
│   ├── remediation-strategies/
│   │   └── SKILL.md                     # Remediation skill definition
│   ├── standards-compliance/
│   │   └── SKILL.md                     # Standards compliance skill
│   ├── document-generation/
│   │   └── SKILL.md                     # Document generation skill
│   └── gap-analysis/
│       └── SKILL.md                     # Gap analysis & measure creation
├── commands/
│   ├── dyslexia-audit.md               # /dyslexia-audit command
│   ├── generate-iep.md                 # /generate-iep command
│   ├── remediation-plan.md             # /remediation-plan command
│   └── content-accessibility-check.md  # /content-accessibility-check command
├── templates/                           # Document templates (IEP, 504, etc.)
└── examples/                            # Example outputs and usage
```

## Target Audience

This skill set is designed for **developers and tool builders** creating:
- EdTech platforms with dyslexia support
- Accessibility tools and assistive technology
- IEP/504 management systems
- Progress monitoring dashboards
- Content authoring tools with universal design
- Teacher training and decision support systems

## Disclaimer

Generated documents (IEPs, 504 plans, evaluation summaries) are professional-quality templates that **require review and approval by qualified professionals**. They are starting points — not substitutes for licensed educators, psychologists, or legal counsel.

## Contributing

Contributions welcome. Areas where help is especially needed:
- State-specific dyslexia mandate data
- Additional evidence-based program profiles
- Translations and multilingual support
- Validation studies for gap-analysis measures
- Integration examples with popular EdTech platforms

## License

MIT
