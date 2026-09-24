const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Earth", "Mars"],
    correctAnswer: "Jupiter"
  }
];

let score = 0;
let currentQuestionIndex = 0;
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function showQuestion() {
  quizContainer.innerHTML = "";
  resultContainer.textContent = "";

  if (currentQuestionIndex >= questions.length) {
    const percentage = Math.round((score / questions.length) * 100);
    quizContainer.innerHTML = `
      <h2>Quiz complete!</h2>
      <p>You scored ${score} out of ${questions.length}</p>
      <p>${percentage}%</p>
    `;
    resultContainer.textContent = `Final score: ${score}/${questions.length}`;
    return;
  }

  const q = questions[currentQuestionIndex];
  const questionElement = document.createElement("div");

  const questionText = document.createElement("p");
  questionText.textContent = q.question;
  questionElement.appendChild(questionText);

  q.answers.forEach((answer) => {
    const answerElement = document.createElement("button");
    answerElement.type = "button";
    answerElement.textContent = answer;
    answerElement.addEventListener("click", () => {
      if (answer === q.correctAnswer) {
        score++;
      }
      currentQuestionIndex++;
      showQuestion();
    });
    questionElement.appendChild(answerElement);
  });

  quizContainer.appendChild(questionElement);
}

showQuestion();