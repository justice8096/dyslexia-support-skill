# /dyslexia-audit

Run a comprehensive dyslexia standards compliance audit on a project, program, document, or tool.

## Usage
```
/dyslexia-audit [target]
```

Where `[target]` is a project path, program name, document, tool, or URL to audit.

## What This Command Does

1. **Identifies the target type** (project/codebase, curriculum, IEP, 504 plan, EdTech tool, content)

2. **For project audits** (when target is a directory/codebase):
   - Creates an `audits/` subdirectory in the project root if it doesn't exist
   - Scans the project for dyslexia-related files, configurations, content, and code
   - Writes the audit report to `audits/Dyslexia-Compliance-Audit-<project-name>-<YYYY-MM-DD>.md`

3. **Runs the appropriate compliance checklists** from the standards-compliance skill

4. **Evaluates against:**
   - IDA Knowledge and Practice Standards (5 domains)
   - IDEA requirements (if IEP/services related)
   - Section 504 requirements (if accommodation related)
   - Structured Literacy alignment (6 elements)
   - Orton-Gillingham principles (5 principles)

5. **Generates a compliance report** following the standard audit format:
   - Metadata table (Project, Date, Auditor, Standards, Scope, Type)
   - Executive Summary with composite score
   - Findings Summary table by severity
   - Compliance by Domain table
   - Detailed findings organized by severity (CRITICAL → HIGH → MEDIUM → LOW)
   - Each finding with: ID, Standard/Law, Severity, Category, Element, Description, Impact, Evidence, Remediation, Effort Estimate
   - Standards Crosswalk matrix
   - Composite Score with weighted dimensions
   - Remediation Roadmap prioritized by impact
   - What Passed section
   - Version History

6. **Flags critical issues** (e.g., 504 plan used where IEP is needed, missing legally required IEP sections, instruction not addressing all structured literacy elements)

## Re-Audit Behavior

When a previous audit file exists in `audits/`:
- Reads prior findings and their IDs
- Generates a new dated report
- Includes a **Remediation Status** table showing FIXED / PARTIALLY FIXED / REMAINING for each prior finding
- Includes a **Before/After Delta Table** showing score changes per dimension
- Documents what changed and what didn't for each compliance domain
- Preserves finding IDs for traceability (e.g., F-001 stays F-001 across audits)

## Output

**Primary output**: A Markdown audit report file written to `<project>/audits/`

**File naming**: `Dyslexia-Compliance-Audit-<project-name>-<YYYY-MM-DD>.md`

The report follows the same format used across other project audits (SAST/DAST, accessibility, LLM compliance, supply chain) for consistency.

## Examples
```
/dyslexia-audit ./my-reading-app
/dyslexia-audit "our Wilson Reading implementation"
/dyslexia-audit student_iep_draft.docx
/dyslexia-audit "our school's reading intervention program"
/dyslexia-audit "this EdTech product's accessibility features"
```

## Example Output Path
```
my-reading-app/
├── audits/
│   └── Dyslexia-Compliance-Audit-my-reading-app-2026-04-03.md
├── src/
└── ...
```
