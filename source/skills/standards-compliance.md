# Dyslexia Standards Compliance Skill

## Purpose
Ensure dyslexia-related programs, tools, documents, workplaces, and practices align with clinical frameworks (DSM-5, ICD-11), and the legal frameworks of three jurisdictions:

- **United States** — IDEA (K-12), Section 504 (K-12 and higher ed), ADA Title I (workplace), ADA Title II/III (public entities and private accommodations), IDA Knowledge and Practice Standards, and structured literacy research.
- **France** — Loi n° 2005-102 (Loi Handicap), Code de l'éducation Art. L321-4, PAP (K-12 pedagogical accommodation, Circulaire 2015-016), PPS via MDPH/CDAPH (K-12 with state-funded support), aménagements d'examens (Circulaire 2023-033), RQTH for adult/workplace contexts.
- **Spain** — LOE/LOMLOE (Art. 71-72, 79 bis), ACNEAE/DEA framework (DEA, *not* NEE, for dyslexia/dyscalculia), ACNS (Adaptaciones Curriculares No Significativas) as primary K-12 tool, EBAU/EvAU exam accommodations, 17-Comunidad Autónoma regional implementations, plus Real Decreto Legislativo 1/2013 (Ley General de Discapacidad) for adult/workplace.

Identify compliance gaps and generate actionable recommendations across educational, clinical, and workplace contexts in any of the three jurisdictions.

> **Clinical Framing**: This skill uses a dual-framing approach. For IDEA/Section 504 legal compliance, dyslexia is classified as a Specific Learning Disorder (DSM-5) or Developmental Learning Disorder (ICD-11). However, the neuroscience evidence (Shaywitz, Dehaene, Gabrieli et al.) establishes dyslexia as a **neurodevelopmental cognitive disorder** — a brain-based difference in phonological and orthographic processing architecture centered on the left temporoparietal cortex, visual word form area (VWFA), and inferior frontal gyrus. This distinction matters: accommodations should compensate for a persistent cognitive processing difference, not merely scaffold a temporary learning gap.

## When to Use
Trigger this skill when the user mentions:
- "IDA standards", "knowledge and practice standards"
- "IDEA compliance", "IDEA requirements", "special education law"
- "Section 504", "504 plan", "504 accommodations"
- "ADA", "ADA Title I", "ADA Title II", "ADA Title III"
- "workplace accommodation", "reasonable accommodation", "EEOC", "interactive process"
- "higher education accommodation", "disability services", "college accommodation", "Office for Civil Rights"
- "DSM-5", "ICD-11", "clinical diagnosis", "specific learning disorder", "developmental learning disorder"
- "IEP requirements", "IEP compliance"
- "FAPE", "free appropriate public education"
- "dyslexia law", "state dyslexia mandate"
- "structured literacy alignment", "science of reading standards"
- "audit my program", "is this compliant"
- "accommodation requirements", "evaluation requirements"
- "workplace dyslexia", "adult dyslexia", "disability disclosure"
- "PAP", "PPS", "MDPH", "CDAPH", "Plan d'Accompagnement Personnalisé", "Projet Personnalisé de Scolarisation"
- "aménagements d'examens", "tiers-temps", "trouble DYS", "Loi Handicap"
- "Code de l'éducation", "Loi du 11 février 2005", "Circulaire 2015-016", "Circulaire 2023-033"
- "RQTH", "AGEFIPH", "FIPHFP", "AESH", "ULIS", "orthophoniste"
- "ACNEAE", "DEA", "dislexia", "ACNS", "ACS", "LOE", "LOMLOE"
- "Adaptaciones Curriculares", "EOEP", "orientador", "Informe Psicopedagógico"
- "EBAU", "EvAU", "PRODISLEX", "Pedagogía Terapéutica"
- "French locale", "Spanish locale", "locale=fr", "locale=es"

## Locale Selection

This skill supports three legal-framework locales. Specify the locale when requesting an audit, compliance review, or document generation:

| Locale Code | Jurisdiction | Primary Legal Framework | Adult/Workplace Layer |
|-------------|-------------|------------------------|----------------------|
| `us` (default) | United States | IDEA, Section 504, IDA Knowledge and Practice Standards | ADA Title I (workplace), ADA Title II/III (public/private accommodations) |
| `fr` | France | Loi 2005-102, Code de l'éducation, PAP/PPS system, Circulaire 2015-016 | RQTH via MDPH/CDAPH; AGEFIPH (private) / FIPHFP (public) accommodation funding; aménagements in CFA / higher ed via service handicap |
| `es` | Spain | LOE/LOMLOE, ACNEAE/DEA framework, ACNS pathway (17 regional implementations) | Real Decreto Legislativo 1/2013 (Ley General de Discapacidad); certificado de discapacidad ≥33%; Centros Especiales de Empleo |

When no locale is specified, `us` is assumed. Locale selection changes which legal standards are audited against, which compliance checklists are applied, and which crosswalk references appear in the report. **Lifespan note**: all three locales have distinct frameworks for K-12, higher education, and adult/workplace; the locale flag selects jurisdiction, while the existing `context` parameter (k12-education / higher-education / workplace / etc.) selects which lifespan layer applies.

## Core Standards Framework

### 0. Clinical Classification (DSM-5, ICD-11)

Dyslexia has formal clinical classifications that drive eligibility determinations, accommodation requests, and legal protections. These frameworks matter because:

- **Workplace accommodation requests** under ADA Title I typically require clinical documentation
- **Higher education disability services** typically require DSM-5 or equivalent clinical diagnosis
- **Insurance coverage** for assessment and intervention depends on clinical coding

**DSM-5 (2013, text revision 2022) — 315.00**
- **Specific Learning Disorder With Impairment in Reading** (dyslexia)
- Specifiers: word reading accuracy, reading rate or fluency, reading comprehension
- Severity: mild, moderate, severe
- Diagnosis requires: (1) persistent difficulties ≥6 months despite intervention; (2) substantially below expected for chronological age; (3) onset during school-age; (4) not better explained by intellectual disability, sensory impairment, or lack of instruction.

**ICD-11 (effective 2022) — 6A03.0**
- **Developmental Learning Disorder With Impairment in Reading**
- Replaces ICD-10 F81.0 (Specific Reading Disorder)
- Diagnosis requires: significant and persistent difficulty learning academic skills related to reading (word reading accuracy, fluency, or comprehension) substantially below expected for age; onset during school years; not attributable to intellectual development disorder, sensory impairment, neurological disorder, lack of adequate instruction, or psychosocial adversity.

**Clinical Diagnostic Instruments (Adult)**
- **Nelson-Denny Reading Test** — Adult reading comprehension and rate
- **Woodcock-Johnson IV Tests of Achievement** (adult-capable forms)
- **CTOPP-2** — Comprehensive Test of Phonological Processing (ages 4-24; adult norms for some subtests)
- **WAIS-IV** — Adult cognitive assessment
- **TOWRE-2** — Test of Word Reading Efficiency (ages 6-24)
- **TOSWRF** — Test of Silent Word Reading Fluency
- Clinical interview and developmental history are required; standardized tests alone are insufficient.

### 1. IDA Knowledge and Practice Standards (2018)

**Five Major Standards:**

**Standard 1: Foundation Concepts**
- Practitioners understand reading development theory and the nature of dyslexia as a neurodevelopmental cognitive disorder — a brain-based difference in phonological and orthographic processing, not a reflection of intelligence or effort.
- Knowledge of language structure (phonology, morphology, orthography) is foundational.

**Standard 2: Knowledge of Diverse Reading Profiles**
- Understanding of dyslexia and related disorders (dysgraphia, dyscalculia).
- Recognition that reading profiles vary — no two students with dyslexia are identical.
- Awareness of comorbid conditions.

**Standard 3: Assessment and Evaluation**
- Competence in administering and interpreting formal and informal assessments.
- Key assessments: CTOPP-2 (phonological processing), WRMT (reading mastery), WISC-V (cognitive), CELF (language).
- Multifaceted evaluation required — no single test diagnoses dyslexia.
- Progress monitoring and data-driven decision-making.

**Standard 4: Structured Literacy Teaching**
- Instruction must address all six elements: phonology, sound-symbol association, syllable instruction, morphology, syntax, semantics.
- Must follow OG principles: multisensory, explicit, diagnostic/prescriptive, sequential/cumulative, individualized.
- Domains: phonological awareness, phonics/word recognition, fluency, vocabulary, comprehension, written expression.

**Standard 5: Ethical Standards**
- Scope of practice boundaries.
- Continuing education requirements.
- Professional conduct and responsibility.

### 2. IDEA (Individuals with Disabilities Education Act)

**Key Requirements for Dyslexia:**

- **Eligibility**: Dyslexia is explicitly recognized as a specific learning disability. Dual requirement: (1) documented disability AND (2) need for special education services.
- **FAPE**: Schools must provide free appropriate public education.
- **IEP Requirements**:
  - Present Levels (PLAAFP) documenting how dyslexia affects academic performance
  - Measurable annual goals targeting dyslexia-related deficits
  - Special education services with frequency, duration, location
  - Accommodations and modifications
  - Progress monitoring and reporting schedule
- **IEP Team**: Must include a member with specific knowledge of reading, dyslexia, and dyslexia instruction during eligibility determinations.
- **Evaluation**: Comprehensive, multifaceted evaluation using multiple data sources. Cannot use a single measure.
- **Prior Written Notice**: Required before any IEP changes.
- **Parent Rights**: Procedural safeguards, right to independent evaluation, due process.

### 3. Section 504 (Rehabilitation Act of 1973)

**Key Differences from IDEA:**

| Aspect | IDEA (IEP) | Section 504 |
|--------|-----------|-------------|
| Purpose | Provide special education services | Ensure equal access via accommodations |
| Services | Specialized instruction + accommodations | Accommodations only |
| Funding | Federal special ed funding | No additional funding |
| Best for | Students behind academically needing intensive instruction | Students who decode adequately but need access support |
| Documentation | Formal IEP document | 504 Plan |
| Team | Formal IEP team with specific membership | Less formal; teacher + parent + admin |

**Common 504 Accommodations for Dyslexia:**
- Extended time (typically 25-50%)
- Text-to-speech / read-aloud
- Speech-to-text / dictation
- Spell-checker and grammar tools
- Reduced workload / modified assignments
- Alternative assessment formats
- Preferential seating
- Quiet testing environment
- Audio recordings of lectures
- Note-taking assistance

**Critical Compliance Note:** A 504 plan alone is typically insufficient for students who are behind academically. These students need IDEA services (structured literacy instruction of sufficient intensity) in addition to accommodations.

### 4. Section 504 & ADA Title II/III in Higher Education

Higher education is governed by Section 504 (all institutions receiving federal funding) and ADA Title II (public colleges/universities) or ADA Title III (private colleges/universities). Unlike K-12, higher ed operates under a **self-advocacy model**: students must disclose, document, and request accommodations.

**Key Differences from K-12**

| Aspect | K-12 (IDEA/504) | Higher Ed (504/ADA) |
|--------|-----------------|---------------------|
| Who initiates | School identifies + evaluates | Student self-discloses |
| Documentation | School evaluates at no cost | Student provides (often adult-level clinical) |
| Responsibility | Child-find obligation on school | Student must register with disability services |
| Services | FAPE + specialized instruction | Access + accommodations only (no instruction) |
| Modification | IEP can modify curriculum | Fundamental alteration of program not required |
| Parent rights | Procedural safeguards | Adult student has rights; FERPA applies |

**Common Higher Ed Accommodations**
- Extended time on exams (typically 1.5× or 2×)
- Reduced-distraction testing environment
- Alternative-format materials (digital texts, audiobooks, Bookshare)
- Note-taking services, lecture recording permission
- Priority registration (to schedule around reading-heavy courses)
- Reduced course load maintaining full-time status
- Waiver of foreign language requirement (when foundational reading is affected)
- Spell-check and grammar tools on written exams
- Use of text-to-speech during exams

**Disability Services Office Requirements**
Students typically must submit:
- Clinical evaluation (usually within 3-5 years; requirements vary by institution)
- Documentation from licensed psychologist, neuropsychologist, or educational diagnostician
- Functional impact statement (how dyslexia affects current academic performance)
- Prior accommodation history (IEP/504 from K-12 is supporting evidence but not always sufficient)

**OCR Complaint Process**
If a college denies appropriate accommodations, students can file a complaint with the U.S. Department of Education Office for Civil Rights (OCR) within 180 days of the alleged discrimination.

### 5. ADA Title I: Workplace Accommodations

**The Americans with Disabilities Act (ADA) Title I** prohibits employment discrimination and requires reasonable accommodation for qualified individuals with disabilities. Applies to employers with 15 or more employees. Federal contractors are also covered under Section 503 of the Rehabilitation Act.

**Key Concepts**

- **Qualified individual**: Can perform essential functions of the job with or without reasonable accommodation
- **Reasonable accommodation**: Modification to job, workplace, or process that enables task performance; does not impose undue hardship
- **Undue hardship**: Significant difficulty or expense relative to employer size and resources; narrow standard
- **Interactive process**: Good-faith dialogue between employee and employer to identify effective accommodations; required by EEOC
- **Essential functions**: Core job duties; accommodations do not require removing these but may modify how they're performed

**Common Workplace Accommodations for Dyslexia**

*Reading-related:*
- Text-to-speech software (JAWS, NVDA, Read&Write, Natural Reader, Voice Dream)
- Audio versions of training materials and documents
- OCR tools for scanned documents (Kurzweil 3000, Read&Write, Adobe)
- Dyslexia-friendly fonts in company documents (Lexend, Atkinson Hyperlegible, OpenDyslexic)
- Larger font size and modified line spacing for printed materials
- Reading rulers or focus overlays for dense documents

*Writing-related:*
- Speech-to-text software (Dragon NaturallySpeaking, Windows Speech Recognition, Apple Dictation)
- Advanced grammar/spell-checkers (Grammarly, Ginger, Word spell-check)
- Word prediction software
- Templates for routine correspondence
- Permission to submit drafts for review before finalizing client-facing documents

*Process-related:*
- Written instructions for verbally-assigned tasks (reduces working memory load)
- Extended time for reading-heavy assessments (performance reviews, compliance training, certifications)
- Quiet or private workspace (reduces auditory load during heavy reading)
- Meeting summaries in writing after verbal discussions
- Advance notice of documents to review (permits use of TTS at home workflow)
- Recording permission for meetings (review later with captions/TTS)
- Alternative formats for workplace training (audio/video alternatives to text-heavy modules)

*Organizational:*
- Task-management software access (Todoist, Asana, Microsoft Planner)
- Visual project-management tools rather than text-heavy status reports
- Regular check-ins to verify understanding of complex written directives

**Disclosure Considerations**

Employees are **not required** to disclose dyslexia. Disclosure is only necessary when requesting accommodation. When disclosing:
- Disclose **functional impact**, not the diagnosis alone ("I process written text more slowly than colleagues" vs "I have dyslexia")
- Provide medical documentation only when employer requests it through proper channels
- Documentation requests must be job-related and consistent with business necessity
- Employers may require clinical documentation (DSM-5 / ICD-11 diagnosis) but cannot demand full medical records
- Disclosure timing: during hiring process is rarely advisable; typically after offer acceptance or when accommodation becomes necessary

**EEOC Charge Process**

If an employer denies a reasonable accommodation without establishing undue hardship, or retaliates against a disability-related request:
1. File an EEOC charge within **180 days** (300 days in deferral states) of the discriminatory act
2. EEOC investigates; may offer mediation
3. Right-to-sue letter issued after investigation (or upon request after 180 days)
4. Employee has 90 days after right-to-sue letter to file federal lawsuit

**Federal Contractors (Section 503)**

Federal contractors with contracts ≥ $10,000 must comply with Section 503 of the Rehabilitation Act, which imposes affirmative action obligations beyond ADA Title I (utilization goal: 7% of workforce with disabilities across all job groups).

### 6. ADA Title II & Title III: Public Accommodations and State/Local Government

**ADA Title II** — State and local government entities (including public schools, public universities, public libraries, DMVs, courts, transit). Must provide program access; may require reasonable modifications of policies, practices, or procedures.

**ADA Title III** — Private entities open to the public (including private universities, retail, restaurants, theaters, professional offices, testing agencies like ETS/Pearson VUE/College Board). Must provide auxiliary aids and services when necessary for effective communication.

**Applications to Dyslexia**
- Testing agencies (College Board, ACT, GRE, LSAT, MCAT) must provide accommodations on standardized tests
- Public-facing government forms should use plain language and offer accessible formats
- Professional licensure exams (bar, medical boards, CPA) must provide accommodations
- Healthcare providers must provide effective communication (written materials in accessible formats, plain-language explanations)

### 7. French Legal Framework (Locale: fr)

#### 7.1 Key Laws

| Law / Regulation | Subject |
|-----------------|---------|
| **Loi n° 2005-102 du 11 février 2005** (Loi Handicap) | Foundational disability statute. Establishes universal right to mainstream schooling, creates MDPH/CDAPH, defines disability broadly to include troubles DYS when they constitute lasting limitation on activity or participation. |
| **Code de l'éducation, Art. L112-1 to L112-5** | Right to mainstream schooling; state must provide necessary resources; training of educators in special needs. |
| **Code de l'éducation, Art. L311-7 / D311-13** | Legal basis for the PAP; students whose difficulties stem from a learning disorder may receive a PAP after consultation with school physician. |
| **Code de l'éducation, Art. L321-4** | Schools **must** provide specific accommodations for students with oral/written language disorders (dyslexia explicitly named); when difficulties are severe and permanent, adapted teaching is required. This is **not discretionary**. |
| **Circulaire n° 2015-016 du 22 janvier 2015** | Implementing circular for the PAP. Defines target population, initiation procedure, standardized document template (four sheets: maternelle, élémentaire, collège, lycée), school physician validation requirement, annual review. |
| **Circulaire n° 2023-033 du 23 février 2023** | Current implementing guidance on exam accommodations (aménagements d'examens) for candidates with disabilities including DYS. Supersedes earlier circulars. |
| **Code de l'éducation, Art. D351-27 to D351-32** | Exam accommodation provisions for students with disabilities. |
| **Code du travail, Art. L5213-1 et suivants** | Workplace disability framework. RQTH (Reconnaissance de la Qualité de Travailleur Handicapé) issued by CDAPH; opens access to AGEFIPH (private sector) / FIPHFP (public sector) accommodation funding. |

#### 7.2 K-12 Support Plan Types

France uses four distinct K-12 educational support instruments. The correct plan type must be identified during any compliance audit.

| Plan | Full Name | US Equivalent | Key Facts |
|------|-----------|--------------|-----------|
| **PPRE** | Programme Personnalisé de Réussite Éducative | RTI Tier 1-2 | First-line intervention; no MDPH, no medical validation; any academic difficulty; short-term |
| **PAP** | Plan d'Accompagnement Personnalisé | Section 504 Plan | For lasting difficulties due to troubles des apprentissages (DYS); requires school physician validation; NO MDPH involvement; followed from école through lycée; reviewed annually |
| **PPS** | Projet Personnalisé de Scolarisation | IEP under IDEA | Requires MDPH/CDAPH recognition; enables AESH (human aide), ULIS placement, state-funded equipment; coordinated by enseignant référent; ESS monitoring team |
| **PAI** | Projet d'Accueil Individualisé | Health-specific 504/IHP | For chronic health conditions; not typically used for DYS unless comorbid health condition present |

**Critical rule**: A student cannot hold both a PAP and a PPS simultaneously. If the student needs human assistance (AESH), specialized placement (ULIS), or state-funded personal equipment, the PPS pathway is required.

**Decision tree for DYS students:**
- Mild/temporary difficulty → PPRE
- Lasting DYS trouble, pedagogical accommodations only → PAP (no MDPH needed)
- DYS trouble requiring AESH, ULIS placement, or financial allocation → PPS (MDPH dossier required)

#### 7.3 MDPH Process

The MDPH (Maison Départementale des Personnes Handicapées) is the departmental disability services center. One exists per département.

- **Required only for PPS pathway in K-12; required for RQTH for adults.** PAP students do NOT need MDPH recognition.
- **MDPH application**: Family files dossier including Cerfa forms, medical certificate (less than 6 months old), and supporting evaluations (bilan orthophonique, neuropsychological evaluation).
- **CDAPH decision**: The Commission des Droits et de l'Autonomie des Personnes Handicapées within the MDPH grants disability recognition and approves PPS content (K-12) or RQTH (adult).
- **Enseignant référent**: Assigned to coordinate PPS implementation within the school (K-12 only).
- **ESS meetings**: Équipe de Suivi de Scolarisation meets at least annually to review PPS.

#### 7.4 Assessment and Diagnosis

| Professional | Role |
|-------------|------|
| **Orthophoniste** (Speech-Language Therapist) | Conducts the bilan orthophonique — central evaluation for dyslexia and dyscalculia; typically first specialist consulted; prescription required from treating physician; central to both K-12 and adult assessment |
| **Neuropsychologue** | Evaluates intellectual efficiency (WISC-V French norms / WAIS-IV French norms for adults), attention, executive functions, memory; essential for differential diagnosis |
| **Médecin traitant / Pédiatre** | Prescribes assessments, coordinates synthesis, issues formal diagnosis — only a physician can formally diagnose |
| **Médecin de l'Éducation nationale** | School physician; validates PAP; may refer for further assessment (K-12 only) |
| **CRTLA** | Centre de Référence des Troubles du Langage et des Apprentissages — hospital-based multidisciplinary team for complex cases |

**Key assessment tools**: BMT-i (computerized modular battery, ages 4-13); bilan orthophonique (French-normed); WISC-V French norms (children); WAIS-IV French norms (adults); Alouette (reading age); ECLA-16+ (French screening adapted for adolescents/young adults).

**Diagnostic criteria**: ICD-11/CIM-11 (6A03 — Developmental learning disorder) / DSM-5. Significant persistent discrepancy between expected and actual achievement, not explained by intellectual disability, sensory deficit, inadequate instruction, or psychosocial factors.

#### 7.5 Required K-12 Accommodations

Under Art. L321-4 Code de l'éducation, accommodations for students with DYS are legally mandatory, not discretionary.

**Dyslexia accommodations:**
- Extra time for reading tasks
- Adapted document formatting: Arial or OpenDyslexic ≥14pt, line spacing 1.5-2x, left-aligned, no italics, no full justification
- Oral presentation of written instructions
- Reduced written requirements
- Text-to-speech software, audio recordings
- Reader assistance for tests/exams
- Spelling errors not penalized in non-language subjects
- Color overlays or adapted backgrounds
- Access to course notes/outlines in advance

**Dyscalculia accommodations:**
- Calculator authorized (including where normally prohibited)
- Number line, multiplication tables, reference charts
- Adapted mathematical problem presentation
- Extra time for calculation tasks
- Oral explanation of reasoning accepted

#### 7.6 Exam Accommodations (Aménagements d'Examens)

Key principle: **Exam accommodations must be consistent with what the student uses in class (PAP/PPS)**. A student without tiers-temps in their plan will have difficulty obtaining it for the Baccalauréat or Brevet. This creates a critical audit checkpoint.

| Accommodation | French Term | Notes |
|--------------|------------|-------|
| Extra time | Tiers-temps | Standard: one-third additional time; can be adjusted upward in severe cases |
| Reader | Secrétaire lecteur | Reads exam aloud; no correction or commentary permitted |
| Scribe | Secrétaire scripteur | Writes candidate's dictated answers; no correction |
| Computer | Ordinateur | For written production; spell-check may be enabled or disabled per accommodation |
| Calculator | Calculatrice | All exams, including those where normally prohibited (dyscalculia) |
| Separate room | Salle séparée | Quieter testing environment |
| Rest breaks | Temps de pause | Clock paused during authorized breaks |
| Oral substitution | Épreuve orale de remplacement | Oral exam substituted for written |
| Adapted materials | Sujets adaptés | Enlarged print, modified formatting |
| Exemption | Dispense d'épreuve | Rare; replaced by adapted alternatives where possible |

**Application procedure**: Filed during second trimester of year preceding the exam. Medical certificate + specialist assessments + evidence of classroom use required. Decision by academic authority (recteur). Appeal to Défenseur des Droits if refused.

#### 7.7 Higher Education (Université / CFA)

The PAP and PPS do **not** transfer to higher education. Students must re-establish accommodations through each institution's **service handicap** (disability services office).

- **Université / Grandes écoles**: Each institution has a service handicap. Students provide medical certificate and prior plan documentation; institution issues a **plan d'accompagnement** valid for the program.
- **CFA / apprentissage**: Apprentices may request accommodations through the CFA's référent handicap; AGEFIPH may fund accommodation costs.
- **Common accommodations**: tiers-temps for exams, secrétaire (reader/scribe), computer with spell-check, accessible course materials, note-taker (preneur de notes).
- **Foreign-language requirement**: French universities have varying policies on dispense from second-language requirements; document specific request via service handicap.

#### 7.8 Adult / Workplace Context

For adults with dyslexia in the workplace, the framework shifts from PAP/PPS (K-12) to **RQTH-based** workplace accommodation:

- **RQTH (Reconnaissance de la Qualité de Travailleur Handicapé)**: Issued by CDAPH after MDPH application. Voluntary; opens access to accommodation funding and protection against discrimination.
- **AGEFIPH** (private sector) / **FIPHFP** (public sector): Fund workplace accommodations including assistive technology, workspace adjustments, training, and job coaching.
- **Adapted assistive technology** for adult workers (French TTS via Vocale Presse, dictionary apps, French-spelling correctors like Antidote, French OCR via Scan&Read).
- **Centres de Réadaptation Professionnelle (CRP)**: For adult retraining when dyslexia significantly affected initial career path.
- **Loi Avenir Professionnel (2018)**: Mandates company-level disability référent for firms ≥250 employees.

**Disclosure considerations** (parallel to ADA Title I in US):
- Disclosure to employer is voluntary except when requesting RQTH-funded accommodation.
- Anti-discrimination protections in Art. L1132-1 Code du travail apply.
- Recourse via Défenseur des Droits or labor tribunal (Conseil de Prud'hommes).

#### 7.9 Teacher Training

- No nationally mandated minimum hours on DYS disorders in initial teacher training (a significant gap vs. US).
- **CAPPEI** (Certificat d'Aptitude Professionnelle aux Pratiques de l'Éducation Inclusive) is the specialized certification for inclusive education; voluntary for mainstream teachers; required for ULIS coordinators and enseignants référents.
- Continuing education via Plans Académiques de Formation (PAF) is voluntary for mainstream teachers.
- Legal obligation is on the institution to provide accommodations, not on individual teacher certification.

#### 7.10 France–US Crosswalk

| French Framework | US Equivalent | Key Difference |
|-----------------|--------------|----------------|
| Loi du 11 février 2005 | IDEA + Section 504 + ADA | French law is a single statute; US splits across three laws |
| PAP | Section 504 Plan | PAP requires school physician validation; 504 requires school-based evaluation |
| PPS | IEP under IDEA | PPS created by MDPH (external to school); IEP created by school-based team |
| PPRE | RTI/MTSS Tier 1-2 | PPRE is less formalized |
| MDPH/CDAPH | LEA eligibility determination | MDPH is departmental; US is district-level |
| Tiers-temps | Extended time (time-and-a-half) | France mandates one-third; US typically 25-50% |
| Secrétaire lecteur | Reader accommodation | Functionally equivalent |
| AESH | 1:1 paraprofessional aide | AESH is PPS-only; US aide may be on IEP or 504 |
| ULIS | Resource room/self-contained class | Both on LRE continuum |
| RQTH | ADA Title I (workplace coverage) | RQTH is voluntary status that unlocks AGEFIPH funding; ADA coverage is automatic for qualified individuals with disability |
| AGEFIPH/FIPHFP | EEOC + JAN (Job Accommodation Network) | AGEFIPH funds accommodations directly; US accommodations typically employer-funded with EEOC enforcement |
| Service handicap (université) | Disability Services Office | Functionally equivalent |
| Défenseur des Droits | OCR complaint / due process / EEOC charge | Different escalation bodies depending on context |

### 8. Spanish Legal Framework (Locale: es)

#### 8.1 Key Laws

Spain's education system is significantly devolved to 17 Comunidades Autónomas. National organic laws set the floor; regions implement and may exceed national requirements.

| Law / Regulation | Subject |
|-----------------|---------|
| **LOE — Ley Orgánica 2/2006** | Foundational education law. Title II establishes legal basis for supporting students with diverse needs. Art. 71-72: administrations must provide resources for students with learning difficulties. Art. 79 bis (added by LOMLOE): specifically addresses DEA students, requires early identification. |
| **LOMLOE — Ley Orgánica 3/2020** | 2020 reform of LOE. Explicitly broadened ACNEAE to include "trastornos de atención o de aprendizaje." Established DUA (Universal Design for Learning) as a basic principle. Set 10-year timeline for inclusive school resources. |
| **Real Decreto 157/2022** | Updated Primary Education curriculum under LOMLOE; reinforces competency-based assessment and inclusive attention. |
| **Real Decreto 217/2022** | ESO (Compulsory Secondary) curriculum under LOMLOE. |
| **Real Decreto Legislativo 1/2013** (Ley General de Discapacidad) | Consolidated workplace and adult disability framework. Defines Centros Especiales de Empleo, regulates 2% reserved-employment quota for firms ≥50 employees, sets non-discrimination protections, establishes certificado de discapacidad ≥33% as gateway to workplace protections. |
| **Regional legislation** | Each Comunidad Autónoma enacts implementing decrees/orders. Key examples: Andalucía (Instrucciones 12/12/2014), Cataluña (Decret 150/2017), Madrid (Decreto 23/2023; Orden 19/01/2021), País Vasco (Decreto 236/2015), Valencia (ORDEN 20/2019), Galicia (Decreto 229/2011). |

#### 8.2 ACNEAE Framework

ACNEAE (Alumnado con Necesidad Específica de Apoyo Educativo) is the broadest category under LOMLOE, covering all students with specific educational support needs.

**Critical distinction for dyslexia/dyscalculia**: These conditions fall under **DEA (Dificultades Específicas de Aprendizaje)**, which is a subcategory of ACNEAE but is **NOT** classified as NEE (Necesidades Educativas Especiales). This determines which support pathway applies.

| ACNEAE Subcategory | Abbreviation | Includes | Support Pathway |
|-------------------|-------------|---------|----------------|
| Special Educational Needs | NEE | Disability, severe behavioral disorders, severe communication disorders | Dictamen de Escolarización + possible ACS |
| **Specific Learning Difficulties** | **DEA** | **Dyslexia (dislexia), dyscalculia (discalculia), dysgraphia, dysorthography** | **ACNS (primary tool) — NOT Dictamen** |
| ADHD | TDAH | Attention deficit hyperactivity disorder | ACNS |
| High Abilities | Altas Capacidades | Giftedness | Enrichment measures |
| Late Entry | — | Students entering Spanish system late | Specific support |

**Students with dyslexia/dyscalculia do NOT typically receive NEE classification.** Applying the NEE/Dictamen pathway to a DEA student is a compliance error and a frequent audit finding.

#### 8.3 K-12 Support Plan Types

| Plan Type | Spanish Name | US Equivalent | Key Facts |
|-----------|-------------|--------------|-----------|
| **ACNS** | Adaptaciones Curriculares No Significativas | Section 504 Plan | **Primary tool for dyslexia/dyscalculia.** Modifies methodology, assessment procedures, and access — does NOT change curriculum content or objectives. Must be documented, based on Informe Psicopedagógico, agreed with family, reviewed annually. |
| **ACS** | Adaptaciones Curriculares Significativas | IEP with curriculum modification | Reserved for NEE students only. NOT applicable to dyslexia/dyscalculia as sole diagnosis. May affect official qualification. |
| **PTI** | Plan de Trabajo Individualizado | IEP (functional equivalent in some regions) | Used in Castilla-La Mancha and some other regions; replaces ACI terminology. Documents goals, adaptations, responsible professionals. |
| **PAD** | Plan de Atención a la Diversidad | School improvement plan | School-level document (not student-specific); outlines institution's diversity strategy. Required of all schools. |
| **Dictamen de Escolarización** | — | IEP (placement component) | Formal schooling placement recommendation; required for NEE; NOT for DEA |

**Regional terminology note**: The same ACNS concept may be called ACI no significativa, PTI, Plan de Apoyo, or Plan de Atención depending on the Comunidad Autónoma. Always verify regional terminology.

#### 8.4 Assessment Process

| Professional/Team | Role |
|------------------|------|
| **EOEP** (Equipos de Orientación Educativa y Psicopedagógica) | External teams for primary schools; interdisciplinary (orientadores, PT specialists, social workers); organized by geographic sector |
| **Departamento de Orientación** | Internal guidance department in secondary schools (IES) |
| **Orientador/a Educativo/a** | School guidance counselor; conducts assessments, coordinates support plans |
| **Maestro/a de PT** | Special education teacher (Pedagogía Terapéutica); direct support specialist |
| **Maestro/a de AL** | Speech-language teacher (Audición y Lenguaje) |
| **EAP** (Cataluña) / **Berritzegune** (País Vasco) | Regional equivalents of EOEP |

**Assessment pathway:**
1. Detection/screening — PRODISLEX protocols by educational stage
2. Teacher documents observed difficulties and interventions attempted
3. Psychopedagogical evaluation by orientador/a or EOEP (cognitive + achievement testing, exclusionary criteria, context)
4. Informe Psicopedagógico — formal report with classification and recommended ACNS
5. Family notification and consent required

**Diagnostic criteria**: Achievement below Pc (percentile) 25 on normative tests with exclusion of intellectual disability, sensory impairment, and inadequate instruction as primary causes. Some regions (Andalucía, Canarias, Cataluña, Murcia, Navarra) have more specific operational definitions.

**Adult assessment**: Conducted by clinical psychologists or neuropsychologists in clinical settings; uses adult-normed PROLEC-SE or BELEC. Certificado de discapacidad applications go through Centros Base (regional disability assessment centers).

#### 8.5 Required K-12 Accommodations

Under LOMLOE Articles 71, 72, and 79 bis, administrations must identify early, assess needs, provide resources, guarantee inclusion, ensure non-discrimination, and adapt assessment.

**Dyslexia ACNS accommodations (widely required or recommended):**
- Extended time (typically 25-50% additional; varies by region)
- Oral reading of questions
- Allowing oral responses
- No penalization for spelling/orthographic errors attributable to dyslexia
- Enlarged text: Arial 14-16pt, 1.5 line spacing; OpenDyslexic font permitted
- Separate testing room when needed
- Assistive technology (computer, text-to-speech)
- Reduced volume of written work (same complexity level)
- Access to class notes/outlines
- Permission to record lessons
- Multisensory teaching approaches

**Dyscalculia accommodations:**
- Calculators and multiplication tables
- Extended time for mathematics tasks
- Visual/manipulative aids
- Step-by-step problem decomposition

#### 8.6 EBAU/EvAU Exam Accommodations

The university entrance exam (EBAU/EvAU, formerly Selectividad) is administered regionally. Each Comunidad Autónoma establishes its own accommodation procedures.

**Common accommodations across regions:**
- Extended time (30 additional minutes per exam is common; varies by region)
- Enlarged text (Arial 16pt, 1.5 line spacing)
- OpenDyslexic font (recommended in several regions)
- Oral reading of questions upon request
- Separate exam room
- Reduced spelling penalties
- Specific evaluation tribunals (some regions)

**Requirements to receive EBAU accommodations**: Official diagnosis (Informe Psicopedagógico), documented history of accommodations during schooling, application within regional deadlines.

**Key exam accommodation linkage principle**: Like France, students must demonstrate a history of using accommodations (consistency between classroom ACNS and exam accommodations). Students who have not had documented ACNS during Bachillerato face greater difficulty obtaining exam accommodations.

**Regional highlights:**
- **Madrid**: Resolution 27/04/2023 — specific EVAU adaptations, reduced orthographic penalties
- **Cataluña**: 30 additional minutes, specific evaluation tribunals, adapted spelling scoring; bilingual/trilingual assessment context (Catalan + Castilian + optional English)
- **Andalucía**: Instrucciones 12/12/2014 (evaluation measures for dyslexia/DEA/TDAH); was among the first regions to issue specific dyslexia instructions
- **País Vasco**: Berritzegune handles assessments; trilingual context (Basque + Castilian + English)

#### 8.7 Higher Education (Universidad)

Spanish universities operate **oficinas de atención a la diversidad** (or **servicios de apoyo a estudiantes con discapacidad**) as the equivalent of US Disability Services Offices.

- **Documentation required**: Informe Psicopedagógico from K-12 (if available) plus current clinical evaluation, or certificado de discapacidad ≥33%.
- **Common university accommodations**: tiempo adicional (extended time), turno especial (separate room), software adaptado, reducción de carga académica, exención de evaluación oral en lengua extranjera (rare; case-by-case).
- **CRUE — Conferencia de Rectores**: Issues guidance documents on inclusive higher education across the Spanish university system.

#### 8.8 Adult / Workplace Context

For adults with dyslexia in the Spanish workplace, the framework is established by **Real Decreto Legislativo 1/2013 (Ley General de Discapacidad)**:

- **Certificado de discapacidad**: Issued by regional Centros Base after assessment of functional limitation. Threshold is **≥33%** to qualify for workplace protections, tax benefits, and reserved employment.
- **Reserved-employment quota**: Firms with ≥50 employees must reserve 2% of positions for workers with certificado de discapacidad ≥33%. Compensable through Centros Especiales de Empleo contracts or AGEFIPH-equivalent fundraising.
- **Centros Especiales de Empleo**: Specialized workplaces that employ ≥70% workers with disability; provide adapted work environment.
- **Servicio Público de Empleo Estatal (SEPE)**: Regional offices include Empleo Inclusivo programs; orientación laboral for workers with disability.
- **Adapted assistive technology** for adult Spanish workers: Spanish-language TTS (Vozme, Loquendo, ReadSpeaker Spanish voices), Spanish OCR (FineReader Spanish), dictation tools (Dragon Spanish, Apple Dictation Spanish), Spanish-spelling correctors (StilusNet, Microsoft Spanish proofing).
- **Anti-discrimination protections**: Estatuto de los Trabajadores Art. 17 plus Ley General de Discapacidad Art. 35-37.

**Disclosure considerations** (parallel to ADA Title I and FR RQTH):
- Voluntary disclosure; protected by data protection law (LOPD-GDD).
- Recourse through Inspección de Trabajo or Tribunales de lo Social.

#### 8.9 Regional Variation Summary

An audit targeting Spain must identify the relevant Comunidad Autónoma, as terminology, diagnostic thresholds, EBAU procedures, and assessment team names vary significantly.

| Aspect | Varies by Region | Uniform Nationally |
|--------|-----------------|-------------------|
| Diagnostic criteria thresholds | Yes (Pc < 25 in some, less defined in others) | — |
| Support plan terminology (PTI vs. ACI vs. ACNS) | Yes | — |
| EBAU accommodation specifics | Yes | — |
| Assessment team names (EOEP/EAP/Berritzegune) | Yes | — |
| Right to non-significant adaptations | — | Yes (LOMLOE national floor) |
| Inclusion as default placement | — | Yes (LOMLOE mandate) |
| Bilingual assessment requirements | Yes (Cataluña, País Vasco, Galicia, Valencia) | — |
| Certificado de discapacidad threshold (33%) | — | Yes (national, RDL 1/2013) |
| Reserved-employment quota (2% / firms ≥50) | — | Yes (national, RDL 1/2013) |

#### 8.10 Spain–US Crosswalk

| US Framework | Spanish Equivalent | Key Difference |
|-------------|------------------|----------------|
| IDEA | LOE/LOMLOE Title II | IDEA is more prescriptive; LOE/LOMLOE sets principles for regions to implement |
| Section 504 Plan | ACNS + Informe Psicopedagógico | **Closest match for dyslexia/dyscalculia.** Both provide accommodations without modifying curriculum standards. |
| IEP (for disability) | Dictamen de Escolarización + ACS | Spain: two separate documents; Dictamen is about placement, ACS is about curriculum modification; only for NEE |
| SLD eligibility (IDEA) | DEA classification (ACNEAE) | Functionally equivalent. Dyslexia/dyscalculia qualify under both. |
| Child Find | Art. 79 bis LOE + PRODISLEX | Same concept; Spain's implementation varies more by region |
| FAPE | Art. 27 Constitución + LOE Art. 1 | Both guarantee right to education |
| LRE | Principio de normalización e inclusión | Same concept; mainstream first |
| RTI/MTSS | Medidas ordinarias → específicas → extraordinarias (tiered support) | Structurally equivalent |
| ADA Title I (workplace) | RDL 1/2013 (Ley General de Discapacidad) | Spain has reserved-employment quota; US does not. ADA is anti-discrimination only. |
| ADA Title III (testing agencies) | LGD + regional university procedures | Less centralized than US ADA |
| Disability Services Office (university) | Oficina de Atención a la Diversidad | Functionally equivalent |
| School Psychologist | Orientador/a Educativo/a | Closest equivalent |
| Special Education Teacher | Maestro/a de PT (Pedagogía Terapéutica) | Direct support specialist |
| SLP | Maestro/a de AL (Audición y Lenguaje) | School-based speech-language |
| IEP Team | Equipo docente + orientador/a | Less formalized team structure in Spain |
| EEOC | Inspección de Trabajo / Tribunales de lo Social | Different enforcement body |

## Compliance Audit Checklist

When auditing a program, tool, or document for compliance, evaluate against:

### Program/Curriculum Compliance
- [ ] Instruction addresses all six structured literacy elements
- [ ] Follows OG principles (multisensory, explicit, diagnostic, sequential, individualized)
- [ ] Uses evidence-based methodology
- [ ] Provides sufficient intensity for student needs
- [ ] Includes progress monitoring with data collection
- [ ] Materials are accessible and appropriate for student profile
- [ ] Instructor has adequate training (IDA-aligned certification preferred)

### IEP Compliance
- [ ] PLAAFP describes current performance and impact of dyslexia
- [ ] Goals are measurable, time-bound, and aligned to dyslexia deficits
- [ ] Services specify type, frequency, duration, and location
- [ ] Accommodations and modifications listed
- [ ] Progress monitoring schedule defined
- [ ] IEP team includes dyslexia-knowledgeable member
- [ ] Prior Written Notice provided for all changes
- [ ] Parent participation documented

### 504 Plan Compliance
- [ ] Disability and functional limitations documented
- [ ] Accommodations are specific and actionable
- [ ] Implementation responsibilities assigned
- [ ] Review schedule established
- [ ] Grievance procedures included

### Assessment Compliance
- [ ] Multiple assessment tools used (no single-test diagnosis)
- [ ] Phonological processing assessed (CTOPP-2 or equivalent)
- [ ] Reading achievement assessed (decoding, fluency, comprehension)
- [ ] Cognitive ability assessed
- [ ] Language skills assessed
- [ ] Assessment administered by qualified professionals
- [ ] Results interpreted in context of dyslexia-specific patterns

### Cognitive Disorder Accommodation (Neuroscience-Informed)
- [ ] Dyslexia framed as a neurodevelopmental cognitive disorder, not a failure to learn or a reflection of low intelligence
- [ ] Bypass strategies (text-to-speech, audiobooks, spell-checkers, dictation tools) available as permanent cognitive prosthetics, not temporary scaffolds
- [ ] Assessment separates comprehension ability from decoding processing (a student may understand content deeply but be unable to decode the text independently)
- [ ] Automatic word recognition speed not assumed as prerequisite; text-to-speech and read-aloud permitted without penalty
- [ ] Working memory demands explicitly managed: external supports (graphic organizers, written instructions, visual schedules) provided as standard practice
- [ ] Accommodations designed as lifelong supports reflecting persistent cognitive architecture difference, not time-limited remedial aids
- [ ] Cognitive load per task quantified and kept within dyslexia-appropriate limits (max 2-3 novel elements simultaneously)
- [ ] Rapid naming (RAN) deficits recognized as persistent; untimed environments provided as default, not an accommodation

### French Compliance Audit Checklist (Locale: fr)

#### PAP Compliance (K-12)
- [ ] Student has a diagnosed trouble des apprentissages (DYS) documented by qualified professional
- [ ] PAP validated by médecin de l'Éducation nationale (school physician)
- [ ] PAP uses the standardized Circulaire 2015-016 template (correct sheet for school level: maternelle / élémentaire / collège / lycée)
- [ ] PAP lists external care professionals involved (orthophoniste, etc.)
- [ ] Accommodations organized by domain (oral language, written language, mathematics/logic)
- [ ] Signed by family, school physician, and pedagogical team
- [ ] Annual review documented
- [ ] Student does NOT simultaneously hold a PPS (cannot coexist with PAP)

#### PPS Compliance (K-12)
- [ ] MDPH/CDAPH disability recognition obtained (Cerfa forms + medical certificate + supporting evaluations)
- [ ] Enseignant référent assigned
- [ ] ESS (Équipe de Suivi de Scolarisation) meeting held at least annually
- [ ] PPS contents include: schooling modality, human assistance (AESH if needed), material assistance, therapeutic care schedule, pedagogical accommodations
- [ ] If AESH assigned: documented in PPS
- [ ] If ULIS placement: consistent with PPS
- [ ] If state-funded equipment: CDAPH allocation documented

#### Exam Accommodation Compliance (Aménagements d'Examens)
- [ ] Accommodations requested during second trimester of year preceding exam
- [ ] Medical certificate and specialist assessments included in dossier
- [ ] Evidence provided that student uses same accommodations in class (PAP/PPS documentation)
- [ ] Decision by academic authority (recteur) documented
- [ ] Exam accommodations are consistent with what appears in PAP/PPS (no exam accommodation without prior classroom use)
- [ ] If tiers-temps requested: documented in existing PAP/PPS
- [ ] If oral substitution requested: justified in plan documentation

#### Adult / Workplace Compliance (RQTH layer)
- [ ] RQTH status applicable and pursued where worker needs funded accommodations
- [ ] AGEFIPH (private) / FIPHFP (public) funding pathways documented for assistive technology
- [ ] Workplace accommodations include French-language AT (Antidote, Vocale Presse, French TTS/STT)
- [ ] If firm ≥250 employees: référent handicap identified (Loi Avenir Professionnel 2018)
- [ ] Anti-discrimination protections from Code du travail Art. L1132-1 referenced in policies

#### Accommodation Adequacy (K-12)
- [ ] Art. L321-4 obligations met: adapted teaching provided for severe/permanent DYS
- [ ] Document formatting adapted (font ≥14pt, line spacing ≥1.5x, left-aligned, no full justification)
- [ ] Spelling errors not penalized in non-language subjects
- [ ] Assistive technology access documented
- [ ] French-language TTS/AT availability (not English-only tools)

### Spanish Compliance Audit Checklist (Locale: es)

#### Classification and Identification (K-12)
- [ ] Student correctly classified as DEA (not NEE) for dyslexia/dyscalculia
- [ ] ACNS pathway used (NOT Dictamen/ACS pathway for dyslexia/dyscalculia unless comorbid NEE)
- [ ] PRODISLEX or equivalent detection protocol used for initial screening
- [ ] Informe Psicopedagógico completed by orientador/a or EOEP
- [ ] Diagnostic criteria met: achievement below normative threshold with exclusionary criteria checked
- [ ] Family notified and consent obtained

#### ACNS Documentation
- [ ] ACNS documented in writing (not merely informal)
- [ ] Based on Informe Psicopedagógico findings
- [ ] Family agreement documented
- [ ] ACNS applied across all subjects where difficulties manifest (not only language class)
- [ ] Annual review documented
- [ ] Regional terminology verified (ACI no significativa / PTI / Plan de Apoyo — per Comunidad Autónoma)

#### Accommodation Adequacy (K-12)
- [ ] Extended time provided (25-50% depending on region)
- [ ] No penalization for spelling/orthographic errors attributable to dyslexia
- [ ] Oral response alternatives available
- [ ] Assistive technology access documented (computer, text-to-speech if needed)
- [ ] Enlarged text format (Arial 14-16pt, 1.5 line spacing) available for assessments
- [ ] Spanish-language AT availability (Vozme, ReadSpeaker Spanish, StilusNet, etc.)

#### EBAU/EvAU Exam Accommodations
- [ ] Official diagnosis (Informe Psicopedagógico) included in application
- [ ] Documented history of receiving classroom ACNS (particularly during Bachillerato)
- [ ] Application filed within regional deadlines
- [ ] Consistency between classroom accommodations and exam accommodations requested
- [ ] Regional procedure followed for Comunidad Autónoma where exam is taken

#### Specialist Resources
- [ ] Maestro/a de PT (or AL where language-focused) involved in student support
- [ ] EOEP involvement documented for complex cases
- [ ] PAD (Plan de Atención a la Diversidad) at school level includes DEA protocols

#### Adult / Workplace Compliance (RDL 1/2013 layer)
- [ ] Certificado de discapacidad ≥33% obtained where worker needs RDL 1/2013 protections
- [ ] If firm ≥50 employees: 2% reserved-employment quota compliance documented (direct hire or alternative measures)
- [ ] Workplace accommodations include Spanish-language AT
- [ ] Centros Especiales de Empleo or Empleo Inclusivo programs referenced for adapted workplaces
- [ ] LOPD-GDD data protection respected on disability disclosure

## Audit File Generation (Project Audits)

When auditing a **project** (a codebase, EdTech tool, curriculum repository, or any target that lives in a directory), the skill MUST:

1. **Create an `audits/` subdirectory** in the project root if one does not already exist.
2. **Write the audit report as a Markdown file** inside `audits/` using the naming convention:
   ```
   audits/Dyslexia-Compliance-Audit-<project-name>-<YYYY-MM-DD>.md
   ```
3. **Follow the standard audit report format** described below.

### Audit Report Format

The audit report MUST follow this structure, matching the format used across other project audits:

```markdown
# Dyslexia Standards Compliance Audit Report

| Field | Value |
|-------|-------|
| **Project** | <project name> |
| **Audit Date** | <YYYY-MM-DD> |
| **Auditor** | Claude (automated analysis) |
| **Standards** | IDA KPS 2018, IDEA, Section 504, Structured Literacy |
| **Scope** | <what was audited — files, documents, program components> |
| **Type** | <Initial audit / Re-audit of prior findings> |

---

## Executive Summary

<2-3 sentence summary of overall compliance posture. State the composite score
and the most critical gaps.>

### Findings Summary

| Severity | Count | Description |
|----------|-------|-------------|
| CRITICAL | X     | <brief> |
| HIGH     | X     | <brief> |
| MEDIUM   | X     | <brief> |
| LOW      | X     | <brief> |
| **Total**| **X** |             |

### Compliance by Domain

| Domain | Pass | Fail | N/A |
|--------|------|------|-----|
| IDA Standard 1: Foundation Concepts | X | X | X |
| IDA Standard 2: Reading Profiles | X | X | X |
| IDA Standard 3: Assessment | X | X | X |
| IDA Standard 4: Structured Literacy | X | X | X |
| IDA Standard 5: Ethics | X | X | X |
| IDEA Compliance | X | X | X |
| Section 504 Compliance | X | X | X |

---

## Findings

### CRITICAL Findings

> CRITICAL = Students with dyslexia cannot access appropriate services or
> instruction. Legal compliance risk.

#### F-001: <Finding title>
- **Standard/Law:** <IDA Standard X / IDEA §XXX / Section 504>
- **Severity:** CRITICAL
- **Category:** <Instruction / Assessment / Documentation / Accommodation / Legal>
- **Element:** <What was audited — file, document section, program component>
- **Description:** <What is wrong>
- **Impact:** <How this affects students with dyslexia>
- **Evidence:** <What was observed>
- **Remediation:** <Specific, actionable fix>
- **Effort Estimate:** <S / M / L / XL>

---

### HIGH Findings
<same format per finding>

### MEDIUM Findings
<same format per finding>

### LOW Findings
<same format per finding>

---

## Standards Crosswalk

| # | Standard/Requirement | Status | Finding Ref |
|---|---------------------|--------|-------------|
| IDA 1.1 | Reading development knowledge | PASS/FAIL | F-XXX |
| IDA 3.1 | Assessment administration | PASS/FAIL | F-XXX |
| IDEA §300.320 | IEP content requirements | PASS/FAIL | F-XXX |
| ... | ... | ... | ... |

---

## Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Structured Literacy Alignment | 25% | XX | XX |
| Assessment & Evaluation | 20% | XX | XX |
| IEP/504 Compliance | 20% | XX | XX |
| Instructional Methodology | 15% | XX | XX |
| Progress Monitoring | 10% | XX | XX |
| Ethical Standards & Training | 10% | XX | XX |
| **Composite** | **100%** | | **XX/100** |

### Score Interpretation

| Range | Grade | Meaning |
|-------|-------|---------|
| 80-100 | A | Standards-aligned, minor improvements needed |
| 60-79 | B | Good foundation, gaps in specific areas |
| 40-59 | C | Needs improvement, multiple compliance gaps |
| 20-39 | D | Significant deficiencies, systemic gaps |
| 0-19 | F | Non-compliant, fundamental redesign needed |

---

## Remediation Roadmap

| Priority | Finding | Effort | Description |
|----------|---------|--------|-------------|
| 1 | F-XXX | S | <description> |
| 2 | F-XXX | M | <description> |
| ... | ... | ... | ... |

---

## What Passed

| Component | Standard Met |
|-----------|-------------|
| <component> | <what it does right> |

---

## Version History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| YYYY-MM-DD | 1.0 | Claude (automated) | Initial audit |
```

### Re-Audit Behavior

When re-auditing a project that already has an audit file in `audits/`:

1. **Read the previous audit report** to identify prior findings.
2. **Generate a new report** with the current date.
3. **Include a Remediation Status table** at the top of the Findings section:

```markdown
## Remediation Status

| ID | Finding | Severity | Status |
|---|---|---|---|
| F-001 | <title> | CRITICAL | FIXED / PARTIALLY FIXED / REMAINING |
| F-002 | <title> | HIGH | FIXED / REMAINING |

**Summary: X FIXED, X PARTIALLY FIXED, X REMAINING, X NEW**
```

4. **Document what changed and what didn't** for each dimension.
5. **Include a Before/After Delta Table** showing score changes.

## Behavior Guidelines

- Always distinguish between IDEA services and 504 accommodations — they serve different purposes. (locale=us)
- Flag when a 504 plan is being used where an IEP may be more appropriate (student is significantly behind academically). (locale=us)
- Note that state laws may add requirements beyond federal minimums — advise users to check their state's dyslexia mandate. (locale=us)
- **locale=fr**: Always distinguish PAP from PPS — they are not interchangeable. PAP for DYS pedagogical accommodations with school physician validation; PPS only when AESH / ULIS / state-funded equipment required. Flag any case where a French K-12 student holds both simultaneously (legal error). Flag when a French student requests exam aménagements without documented prior classroom use.
- **locale=es**: Always classify dyslexia/dyscalculia under DEA, not NEE — applying Dictamen/ACS pathway to a sole-diagnosis DEA student is a common compliance error. Verify regional terminology (ACNS vs. ACI no significativa vs. PTI vs. Plan de Apoyo) before authoring documents. For workplace, check whether certificado de discapacidad ≥33% has been pursued.
- When evaluating programs, be transparent about evidence levels. Many OG-based programs are widely used but have limited formal RCT evidence; the same caveat applies to FR (Borel-Maisonny, Chassymo) and ES (PRODISLEX) programs.
- Always prioritize student/employee welfare and access to appropriate services.
- Cite specific standards (IDA Standard 3, IDEA §300.320 for US; Art. L321-4 Code de l'éducation, Circulaire 2015-016 for FR; LOE Art. 79 bis, regional CCAA decree for ES) when flagging compliance issues.
- **When auditing a project, ALWAYS create the audit file under `audits/` in the project directory.** Never output audit results only to the conversation — the file is the primary deliverable.
- Use sequential finding IDs (F-001, F-002, ...) that persist across re-audits for traceability.
- For FR and ES audits, always include a crosswalk section in the report showing equivalences to the US framework, since many readers will be more familiar with US legal references.

## Output Formats
- **Project audits**: Markdown file in `<project>/audits/` (primary output)
- Compliance audit reports (Markdown, DOCX, PDF)
- Gap analysis documents with prioritized recommendations
- Standards crosswalk matrices
- Accommodation recommendation lists
- IEP/504 review checklists
