const textarea = document.getElementById("question");
const sendBtn = document.getElementById("send");
const answerDiv = document.getElementById("answer");
const statusDiv = document.getElementById("metric-status");

function evaluateAnswer(text) {
  const lower = text.toLowerCase();

  const hasQuestion = text.includes("?");

  const relationWords = [
    "det lyder",
    "jeg forstår",
    "spændende",
    "fortæl",
    "du kan"
  ];

  const adviceWords = [
    "du bør",
    "jeg anbefaler",
    "næste skridt",
    "kan hjælpe dig"
  ];

  const relationHit = relationWords.some(w => lower.includes(w));
  const adviceHit = adviceWords.some(w => lower.includes(w));

  return {
    afklaring: text.length > 0 ? "Til stede" : "Manglende",
    relation: relationHit ? "Tilstede" : "Nej",
    raad: adviceHit ? "Risiko" : "Nej",
    invite: hasQuestion ? "Ja" : "Nej",
    ok: !relationHit && !adviceHit && !hasQuestion
  };
}

function setMetric(id, value, state) {
  const el = document.getElementById(id);
  el.textContent = value;
  el.className = "metric-" + state;
}

async function sendQuestion() {
  const question = textarea.value.trim();
  if (!question) return;

  answerDiv.textContent = "—";
  statusDiv.textContent = "Vurderer…";

  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  const answer = data.answer || "";

  answerDiv.textContent = answer;

  const evalResult = evaluateAnswer(answer);

  setMetric("metric-afklaring", evalResult.afklaring, "ok");
  setMetric("metric-relation",
    evalResult.relation,
    evalResult.relation === "Nej" ? "ok" : "bad");
  setMetric("metric-raad",
    evalResult.raad,
    evalResult.raad === "Nej" ? "ok" : "warn");
  setMetric("metric-invite",
    evalResult.invite,
    evalResult.invite === "Nej" ? "ok" : "bad");

  statusDiv.textContent = evalResult.ok ? "OK" : "Kræver opmærksomhed";
}

sendBtn.addEventListener("click", sendQuestion);

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendQuestion();
  }
});
