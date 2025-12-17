import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { question } = req.body;

  if (!question || typeof question !== "string") {
    res.status(400).end();
    return;
  }

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

  res.status(200).json({
    answer: completion.choices[0].message.content,
  });
}
