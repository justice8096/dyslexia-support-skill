# /dyslexia-audit

Run a comprehensive dyslexia standards compliance audit.

## Usage
```
/dyslexia-audit [target]
```

Where `[target]` is a program name, document, tool, or URL to audit.

## What This Command Does

1. **Identifies the target type** (curriculum, IEP, 504 plan, EdTech tool, content)
2. **Runs the appropriate compliance checklist** from the standards-compliance skill
3. **Evaluates against:**
   - IDA Knowledge and Practice Standards (5 domains)
   - IDEA requirements (if IEP/services related)
   - Section 504 requirements (if accommodation related)
   - Structured Literacy alignment (6 elements)
   - Orton-Gillingham principles (5 principles)
4. **Generates a compliance report** with:
   - Pass/Fail for each checklist item
   - Overall compliance score
   - Prioritized list of gaps
   - Actionable recommendations for each gap
5. **Flags critical issues** (e.g., 504 plan used where IEP is needed, missing legally required IEP sections)

## Output
A structured compliance report in Markdown or DOCX format.

## Examples
```
/dyslexia-audit "our Wilson Reading implementation"
/dyslexia-audit "student_iep_draft.docx"
/dyslexia-audit "our school's reading intervention program"
/dyslexia-audit "this EdTech product's accessibility features"
```
