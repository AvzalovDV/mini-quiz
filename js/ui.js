const surveyScreen = document.getElementById("survey-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

export function openQuizScreen() {
  surveyScreen.classList.add("is-hidden");
  quizScreen.classList.remove("is-hidden");
}

export function renderFirstQuestion(item) {
  questionText.textContent = item.question;
  optionsContainer.innerHTML = "";

  item.options.forEach((optionText) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "option-card";
    card.textContent = optionText;
    optionsContainer.appendChild(card);
  });
}