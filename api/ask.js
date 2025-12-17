const textarea = document.getElementById("question");
const sendBtn = document.getElementById("send");
const answerDiv = document.getElementById("answer");

let contextState = {
  afklaringstype: null,
  tema: null,
  abstraktionsniveau: "korrekt",
  gentagelse: false
};

function deriveContext(question) {
  const q = question.toLowerCase();

  let tema = contextState.tema;
  let afklaringstype = contextState.afklaringstype;

  if (q.includes("angst") || q.includes("bange")) {
    tema = "angst";
    afklaringstype = "Betinget faglig afklaring";
  } else if (q.includes("virker") || q.includes("effekt")) {
    tema = "evidens";
    afklaringstype = "Betinget faglig afklaring";
  } else if (q.includes("kontrol") || q.includes("styre")) {
    tema = "kontrol";
    afklaringstype = "Faglig afvisning";
  }

  const gentagelse =
    tema === contextState.tema && afklaringstype === contextState.afklaringstype;

  contextState = {
    tema: tema || contextState.tema || "andet",
    afklaringstype: afklaringstype || contextState.afklaringstype || "Betinget faglig afklaring",
    abstraktionsniveau: "korrekt",
    gentagelse
  };
}

async function sendQuestion() {
  const question = textarea.value.trim();
  if (!question) return;

  deriveContext(question);

  answerDiv.textContent = "—";

  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question,
      context: contextState
    })
  });

  const data = await res.json();
  answerDiv.textContent = data.answer || "[intet svar]";
}

sendBtn.addEventListener("click", sendQuestion);

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendQuestion();
  }
});
