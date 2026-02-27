const alphabetContainer = document.getElementById("alphabet-container");

// Alphabet data
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Create cards dynamically
letters.forEach(letter => {
  const card = document.createElement("div");
  card.classList.add("letter-card");
  card.textContent = letter;

  // Click → speak letter
  card.addEventListener("click", () => {
    speakLetter(letter);
  });

  alphabetContainer.appendChild(card);
});

// Speech function
function speakLetter(letter) {
  const speech = new SpeechSynthesisUtterance(letter);
  speech.rate = 0.8;
  speech.pitch = 1.2;
  window.speechSynthesis.speak(speech);
}
