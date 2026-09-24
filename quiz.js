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
const quizContainer = document.getElementById("quiz");
questions.forEach((q, index) => {
  const questionElement = document.createElement("div");
  questionElement.innerHTML = `<p>${q.question}</p>`;
  quizContainer.appendChild(questionElement);
});