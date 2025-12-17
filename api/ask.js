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
          content: `INDSÆT DIN v2.1 SYSTEM-PROMPT HER`,
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
