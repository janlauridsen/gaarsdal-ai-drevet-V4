# Testmetode – Meta-AI-simulation af produkt-AI

Dette dokument beskriver den **anvendte testmetode**, hvor AI-meta (ChatGPT i design- og analyse-rolle) anvendes til at **simulere produkt-AI’ens adfærd** før implementering.

Dokumentet er normativt for test- og designarbejdet, men **ikke en del af produktets brugeroplevelse**.

---

## 1. Formål med testmetoden

Formålet er at:

* validere produkt-AI’ens adfærd før teknisk implementering
* afklare grænser, glidninger og uklarheder tidligt
* teste komplekse samspil (roller, afgrænsning, evidens) uden kode
* sikre konsistens med det normative projektoplæg

Testmetoden erstatter **ikke** senere teknisk test, men reducerer risikoen for forkert design.

---

## 2. Rollefordeling

### AI-meta

AI-meta fungerer som:

* analytisk facilitator
* designer
* test-orkestrator

AI-meta:

* har fuld indsigt i roller, regler og principper
* må reflektere eksplicit over adfærd og grænser
* evaluerer output i forhold til de normative krav

AI-meta er **ikke** en del af produktet.

---

### Produkt-AI (simuleret)

Produkt-AI simuleres af AI-meta ud fra:

* det normative projektoplæg
* definerede interne roller
* fastlagte adfærdsprincipper

Simulationen repræsenterer:

* ønsket slutadfærd
* ikke en konkret teknisk implementering

Produkt-AI-output vises enten:

* isoleret (som brugeren ville se), eller
* med efterfølgende meta-evaluering (kun i testkontekst)

---

## 3. Simulationsprincipper

### 3.1 Eksplicit adskillelse

Der skelnes altid tydeligt mellem:

* **meta-niveau** (analyse, forklaring, evaluering)
* **produkt-niveau** (simuleret brugeroutput)

Produkt-AI-output må aldrig:

* indeholde meta-kommentarer
* forklare egne begrænsninger som designvalg
* referere til test, roller eller simulation

---

### 3.2 Rollebaseret gennemløb

Ved simulation kan et brugerinput gennemløbe:

* strukturerende rolle
* etisk stop-/afgrænsningsrolle
* faglig præcisions-rolle
* samlende rolle

Gennemløbet kan være:

* fuldt synligt (til analyse), eller
* skjult, med kun samlet output vist

---

### 3.3 Fokus på adfærd, ikke svar

Testen vurderer primært:

* *hvordan* der svares
* hvilke grænser der sættes
* hvad der udelades
* om abstraktionsniveauet er korrekt

Indholdets længde eller oplevet hjælpsomhed er sekundært.

---

## 4. Test cases

Test cases består af realistiske brugerforespørgsler.

De anvendes til at:

* afdække glidning mod rådgivning eller relation
* teste stop-typer og abstraktionsløft
* validere evidens- og praksisregler
* sammenligne med generel AI-adfærd

Test cases er:

* uafhængige af teknisk implementering
* genanvendelige over tid

---

## 5. Kontinuitet og sekvenser

Ved sekvens-test:

* brugeren leverer al progression
* produkt-AI stiller ingen opklarende spørgsmål
* kontinuitet er begrebslig, ikke relationel

AI-meta evaluerer, om:

* kontinuitet bliver normativ eller styrende
* gentagelse og konsistens er korrekt balanceret

---

## 6. Begrænsninger ved metoden

Simulationen:

* er ikke en garanti for korrekt runtime-adfærd
* kan ikke erstatte bruger- eller sikkerhedstest
* kan overse tekniske edge cases

Metoden er et **design- og styringsværktøj**, ikke en produktfunktion.

---

## 7. Succeskriterium for testen

Testmetoden er vellykket, hvis den:

* afslører designfejl tidligt
* gør grænser eksplicitte
* reducerer behovet for senere omdesign
* understøtter en stram, ikke-rådgivende produkt-AI

---

## 8. Anvendelse i praksis

Denne testmetode anvendes:

* før implementering
* ved større regelændringer
* ved udvidelse af test-case-kataloget

Metoden kan gentages og justeres uden at påvirke produktet.
