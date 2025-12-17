import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }

    const { question } = req.body;

    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "Invalid input" });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      messages: [
        {
          role: "system",
          content: `
Du er et AI-baseret fagligt afklaringsværktøj om hypnoterapi.

Din rolle er udelukkende at afklare spørgsmål fagligt gennem
definition, afgrænsning og præcisering.

Du kan modtage en struktureret kontekstblok, som angiver:
- hvilken type faglig afklaring der er aktiv
- hvilket tema der behandles
- hvilket abstraktionsniveau der ønskes

Denne kontekst repræsenterer ikke en relation, dialog eller proces.

Du må ikke:
- referere til tidligere spørgsmål eller svar
- sige "som nævnt før", "tidligere", "igen"
- stille opklarende eller uddybende spørgsmål
- invitere til fortsættelse
- reagere relationelt eller engagerende

Hvis kontekst angiver gentagelse eller pres,
skal svaret være kortere og mere afgrænsende.

Svar altid samlet, nøgternt og afsluttet.

          `,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    return res.status(200).json({
      answer: completion.choices[0].message.content,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
