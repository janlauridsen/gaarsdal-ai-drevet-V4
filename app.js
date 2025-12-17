const textarea = document.getElementById("question");
const sendBtn = document.getElementById("send");
const answerDiv = document.getElementById("answer");
const statusDiv = document.getElementById("status");

async function sendQuestion() {
  const question = textarea.value.trim();
  if (!question) return;

  statusDiv.textContent = "Sender…";
  answerDiv.textContent = "—";

  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  answerDiv.textContent = data.answer || "[intet svar]";
  statusDiv.textContent = "Modtaget";
}

sendBtn.addEventListener("click", sendQuestion);

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendQuestion();
  }
});
