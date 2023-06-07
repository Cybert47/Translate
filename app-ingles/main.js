const words = [
  { word: "dog", meaning: "perro" },
  { word: "cat", meaning: "gato" },
  { word: "car", meaning: "coche" },
  { word: "house", meaning: "casa" },
  { word: "book", meaning: "libro" }
];

let currentWord = getRandomWord();

const wordDisplay = document.querySelector(".word-display");
const inputMeaning = document.querySelector(".input-meaning");
const checkMeaningBtn = document.querySelector("#check-meaning-btn");
const addWordBtn = document.querySelector("#add-word-btn");
const showRandomWordBtn = document.querySelector("#show-random-word-btn");
const showReviewListBtn = document.querySelector("#show-review-list-btn");

checkMeaningBtn.addEventListener("click", checkMeaning);
addWordBtn.addEventListener("click", addWord);
showRandomWordBtn.addEventListener("click", showRandomWord);
showReviewListBtn.addEventListener("click", showReviewList);

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function showCurrentWord() {
  wordDisplay.textContent = currentWord.word;
}

function checkMeaning() {
  const meaning = inputMeaning.value.trim();
  if (meaning === currentWord.meaning) {
    alert("¡Correcto!");
    currentWord = getRandomWord();
    showCurrentWord();
    inputMeaning.value = "";
  } else {
    alert("Incorrecto. ¡Inténtalo de nuevo!");
  }
}

function addWord() {
  const word = prompt("Ingresa una palabra:");
  const meaning = prompt("Ingresa su traducción en inglés:");
  words.push({ word, meaning });
  alert("Palabra agregada a la lista de repaso.");
}

function showRandomWord() {
  currentWord = getRandomWord();
  showCurrentWord();
  inputMeaning.value = "";
}

function showReviewList() {
  let reviewList = "Lista de repaso:\n";
  for (const { word, meaning } of words) {
    reviewList += `${word} - ${meaning}\n`;
  }
  alert(reviewList);
  const alertContainer = document.querySelector(".alert-container");
const alertTitle = document.querySelector(".alert-title");
const alertMessage = document.querySelector(".alert-message");
const alertBtn = document.querySelector(".alert-btn");

function showAlert(title, message) {
  alertTitle.textContent = title;
  alertMessage.textContent = message;
  alertContainer.style.display = "block";
}

function hideAlert() {
  alertContainer.style.display = "none";
}

checkMeaningBtn.addEventListener("click", function() {
  const meaning = inputMeaning.value.trim();
  if (meaning === currentWord.meaning) {
    showAlert("¡Correcto!", "");
    currentWord = getRandomWord();
    showCurrentWord();
    inputMeaning.value = "";
  } else {
    showAlert("Incorrecto", "¡Inténtalo de nuevo!");
  }
});

alertBtn.addEventListener("click", hideAlert);

}

showCurrentWord();
