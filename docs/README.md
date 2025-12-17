# gaarsdal-ai-drevet-V4
Projektets formål er at skabe en AI-drevet faglig afklaringsoplevelse for brugere, der overvejer hypnoterapi.
# AI-drevet faglig afklaring for hypnoterapi  
**Normativ baseline v2.0**

Dette repository indeholder det **fulde normative grundlag** for projektet  
*AI-drevet faglig afklaring for hypnoterapi*.

Projektet definerer, tester og fastholder en **ikke-rådgivende, ikke-relationel**
produkt-AI, der udelukkende leverer **faglig afklaring gennem afgrænsning og præcision**.

---

## Projektets kerneidé

Produkt-AI fungerer som et **fagligt afklaringslag** – ikke som terapeut,
coach, rådgiver eller beslutningsstøtte.

Formålet er at:
- reducere uklarhed
- øge faglig præcision
- tydeliggøre grænser

Produktet må **ikke**:
- give råd eller anbefalinger
- foreslå handling eller næste skridt
- behandle, støtte eller validere brugeren
- fungere relationelt eller omsorgsbaseret

Autoritet opstår ved at sige **mindre, men mere præcist**.

---

## Repository-struktur (v2.0)

/
├── README.md
├── 01_Projektoplaeg_AI-drevet-faglig-afklaring_v2.0.md
├── 02_Sprog-og-afgraensningsregler_Produkt-AI_v2.0.md
├── 03_Testmetode_Meta-AI-simulation_v2.0.md
├── 04_Master-Test-Case-Katalog_v2.0.md
├── 05_Adversarial-and-Trolling-Test-Cases_v2.0.md
└── /archive
└── /v1
└── (historiske versioner)


Kun **v2.0-dokumenter** i repo-root er normative.

---

## Normative dokumenter (v2.0-baseline)

### 01. Projektoplæg (root document)
Definerer:
- produktets rolle
- formål og afgrænsning
- etiske og adfærdsmæssige principper  
Har forrang ved uoverensstemmelser.

### 02. Sprog- og afgrænsningsregler – Produkt-AI
Fastlægger:
- tilladte og forbudte sproghandlinger
- håndtering af provokation, meta-pres og sarkasme
- krav til terminal afgrænsning

### 03. Testmetode – Meta-AI-simulation
Beskriver:
- hvordan AI-meta anvendes til design- og adfærdstest
- rollefordeling mellem AI-meta og produkt-AI
- bindende brug af test-matrix

### 04. Master Test-Case Katalog
Indeholder:
- komplekse, realistiske test cases
- fokus på grænseglidning, håb, autoritet og evidens
- grundlag for regression og stabilitet over tid

### 05. Adversarial & Trolling Test Cases
Supplerer med:
- provokerende og fjendtlige inputs
- test af robusthed mod humor, selvforsvar og eskalation
- sikkerheds- og misbrugsperspektiv

---

## Roller i projektet

### AI-meta
- Design-, analyse- og testrolle
- Simulerer produkt-AI
- Evaluerer adfærd mod normative krav
- Producerer test-matrix og designbeslutninger  
**Ikke en del af produktet.**

### Produkt-AI
- Brugerrettet løsning
- Leverer faglig afklaring via begreber og afgrænsning
- Ikke-relationel, ikke-rådgivende, ikke-normativ
- Terminal ved grænser

Produkt-AI-output må aldrig indeholde:
- forklaringer om design
- selvforsvar
- invitationer
- henvisninger eller handlinger

---

## Versionspolitik

Dette repository følger **major/minor-versionering**:

- **MAJOR (fx 2.0 → 3.0)**  
  Ændringer i produktets rolle, afgrænsning, etik eller tilladte handlinger.

- **MINOR (fx 2.0 → 2.1)**  
  Præciseringer, hærdning og sproglig konsolidering uden ændret rolle.

Alle normative dokumenter versionsstyres **samlet**.
Ændringer i ét dokument, der påvirker adfærd, kræver review af hele sættet.

---

## Cloud-only præmis

Projektet er:
- cloud-only
- uden lokal runtime
- uden lokal datalagring

Forventet arbejdskontekst:
- browser-baseret anvendelse
- GitHub til versionsstyring
- ekstern AI via API

---

## Status

- Designfase: **afsluttet**
- Normativ baseline: **v2.0 (locked)**
- Videre arbejde sker via:
  - testkørsel
  - regression
  - implementering
  - drift og overvågning

---

Dette repository er **ikke et produkt**, men det normative fundament,
som produktet skal implementeres og testes imod.

