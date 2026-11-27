import { QUESTIONS } from "./data.js";
import { openQuizScreen, renderFirstQuestion } from "./ui.js";

const surveyForm = document.getElementById("survey-form");

surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderFirstQuestion(QUESTIONS[0]);
  openQuizScreen();
});