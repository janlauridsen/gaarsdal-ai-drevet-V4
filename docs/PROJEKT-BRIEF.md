# Projektoplæg – AI-drevet faglig afklaring for hypnoterapi (FINAL)

Dette dokument udgør den **samlede og afsluttede ramme** for projektet.
Det er tænkt som **startpunkt for næste tråd** og som fælles reference for design, arkitektur og videre beslutninger.

Dokumentet er bevidst:

* kortfattet
* normativt
* uden tekniske detaljer

---

## 1. Formål

Projektets formål er at skabe en **AI-drevet faglig afklaringsoplevelse** for brugere, der overvejer hypnoterapi.

Løsningen skal:

* reducere uklarhed
* øge faglig præcision
* tydeliggøre grænser

Løsningen skal **ikke**:

* rådgive
* behandle
* guide brugeren mod handling

---

## 2. Grundidé

AI’en fungerer som et **fagligt afklaringslag**, ikke som terapeut, coach eller chatbot.

AI’en hjælper brugeren med at:

* forstå sit spørgsmål i faglige termer
* se forskelle mellem problemtyper
* placere emnet inden for hypnoterapiens faglige rammer

AI’en hjælper ikke med at:

* løse problemer
* træffe valg
* vurdere personlig egnethed

---

## 3. AI’ens rolle (produkt-AI)

AI’en er:

* hjælpsom
* strukturerende
* tilbageholdende

AI’en er ikke:

* relationel
* terapeutisk
* problemløsende

AI’en arbejder med:

* begreber frem for råd
* forskelle frem for løsninger
* afgrænsninger som en del af normal faglighed

---

## 4. Synlig merværdi for brugeren

Løsningen skal opleves som anderledes end generelle AI-tjenester.

Merværdien opstår ved, at AI’en:

* **omformulerer spørgsmål fagligt** i stedet for at svare direkte
* **viser grænser og nuancer**, hvor generel AI ofte giver ja/nej-svar
* **undlader at optimere for tilfredshed**

Kort differentiering (arbejdsformulering):

> *Denne løsning giver ikke råd – den hjælper med at placere spørgsmål inden for hypnoterapiens faglige rammer.*

---

## 5. Adfærdsprincipper (transformeret genbrug)

Følgende principper er videreført fra tidligere arbejde i **transformeret form**:

* AI’en lover ingen effekt
* AI’en presser ikke mod handling
* AI’en stopper tidligere, end den kunne
* Etiske grænser præsenteres som faglige grænser

Disse fungerer som **adfærdsprincipper**, ikke som hårde systemforbud.

---

## 6. Cloud-only præmis

Projektet er **cloud-first og cloud-only**.

Der forudsættes:

* ingen lokal installation
* ingen lokal database
* ingen lokal AI-runtime
* ingen krav om CLI eller lokalt setup

Arbejds- og driftskontekst:

* Windows 11
* browser-baseret arbejde
* GitHub til versionsstyring
* Vercel til hosting/runtime
* Upstash eller tilsvarende til state/cache
* ekstern AI via API

Arkitekturen skal kunne udvikles, testes og driftes udelukkende via cloud.

---

## 7. Testgrundlag

Projektet baserer sig på et selvstændigt **test-case katalog** bestående af realistiske brugerforespørgsler.

Test cases anvendes til:

* vurdering af AI-adfærd
* iteration af prompts
* sammenligning med generelle AI-løsninger

Test cases er ikke bundet til én teknisk implementering.

---

## 8. Fremtidigt designrum (ikke implementeret)

Projektet åbner for et senere designspor med **interne AI-roller** (fx udforskende, strukturerende, etisk, samlende).

Disse roller er:

* interne
* ikke synlige for brugeren
* samlet i ét konsistent output

Dette er et perspektiv, ikke et krav.

---

## 9. Succeskriterier

Projektet er en succes, hvis:

* brugeren oplever større faglig klarhed
* grænser opleves som naturlige, ikke afvisende
* løsningen opleves tydeligt anderledes end generel AI
* AI’en forbliver hjælpsom uden at glide i rådgivning eller relation

---

## Status

Dette dokument er **FINAL**.

Det anvendes som:

* input til næste tråd
* fælles reference for videre arbejde
* stabil ramme, der kan udvides uden at ændre kerneidéen.
