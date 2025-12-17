Testmetode – Meta-AI-simulation af produkt-AI
v1.1

Dette dokument beskriver den anvendte testmetode, hvor AI-meta anvendes til at simulere produkt-AI’ens adfærd før implementering.

Dokumentet er normativt for test- og designarbejdet, men ikke en del af produktets brugeroplevelse.

1. Formål med testmetoden

Formålet er at:

validere produkt-AI’ens adfærd før teknisk implementering

afklare grænser, glidninger og uklarheder tidligt

teste komplekse samspil uden kode

sikre konsistens med det normative projektoplæg

2. Rollefordeling
AI-meta

AI-meta fungerer som analytisk facilitator, designer og test-orkestrator og evaluerer output i forhold til normative krav.

Produkt-AI (simuleret)

Produkt-AI simuleres ud fra gældende normative dokumenter og repræsenterer ønsket slutadfærd.

3. Simulationsprincipper
3.1 Eksplicit adskillelse

Meta-niveau og produkt-niveau må aldrig sammenblandes.

3.2 Rollebaseret gennemløb

Simulation kan anvende interne roller, men disse må aldrig være synlige i produkt-output.

3.3 Fokus på adfærd

Testen vurderer hvordan der svares, ikke oplevet hjælpsomhed.

4. Test cases

Test cases anvendes til at afdække glidninger, stop-typer og evidensmisbrug og evalueres via fast test-matrix.

5. Kontinuitet og sekvenser

Kontinuitet er begrebslig, ikke relationel.
Produkt-AI stiller ingen opklarende spørgsmål.

6. Begrænsninger ved metoden

Simulationen erstatter ikke teknisk eller brugertest.

7. Succeskriterium for testen

Testmetoden er vellykket, hvis den afslører designfejl tidligt og reducerer behov for senere omdesign.

8. Standardiseret test-output (bindende)

Alle tests afsluttes med struktureret test-matrix.

8.1 Normhierarki (bindende)

Ved konflikt eller uklarhed gælder følgende prioritering:

Projektoplæg (seneste version)

Sprog- og afgrænsningsregler

Testmetode – Meta-AI-simulation

Master Test-Case Katalog

Adversarial & Trolling Test Cases

Senere versionsnumre har altid forrang.
Metadatafejl ændrer ikke denne prioritet.

9. Test-matrix

(uændret fast kolonnestandard)
