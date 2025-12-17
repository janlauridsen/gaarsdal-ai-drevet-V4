const form = document.getElementById("ask-form");
const answerDiv = document.getElementById("answer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  answerDiv.textContent = "…";

  const question = document.getElementById("question").value;

  const res = await fetch("/api/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  answerDiv.textContent = data.answer;
});
