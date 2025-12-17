import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({ error: "Missing body" });
    }

    const { question, context } = req.body;

    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "Invalid question" });
    }

    // HARD CONTEXT VALIDATION
    let safeContext = null;
    if (context && typeof context === "object") {
      safeContext = {
        afklaringstype: context.afklaringstype || "Betinget faglig afklaring",
        tema: context.tema || "andet",
        abstraktionsniveau: context.abstraktionsniveau || "korrekt",
        gentagelse: Boolean(context.gentagelse)
      };
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const messages = [
      {
        role: "system",
        content: `
Du er et AI-baseret fagligt afklaringsværktøj om hypnoterapi.

Du arbejder udelukkende med faglig afklaring gennem
definition, afgrænsning og præcisering.

Du må ikke:
- rådgive
- stille opklarende spørgsmål
- invitere til fortsættelse
- reagere relationelt eller engagerende

Svar altid nøgternt, samlet og afsluttet.
        `,
      },
    ];

    if (safeContext) {
      messages.push({
        role: "system",
        content: `KONTEKST (metadata, ikke dialog): ${JSON.stringify(safeContext)}`
      });
    }

    messages.push({
      role: "user",
      content: question,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0,
      messages,
    });

    return res.status(200).json({
      answer: completion.choices[0].message.content
    });

  } catch (err) {
    console.error("API ERROR:", err);
    return res.status(500).json({
      error: "Internal server error",
      detail: err.message || String(err)
    });
  }
}
