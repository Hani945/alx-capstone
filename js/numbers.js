const numbersContainer = document.getElementById("numbers-container");

// Create numbers 1–20
for (let i = 1; i <= 20; i++) {
  const card = document.createElement("div");
  card.classList.add("number-card");

  // Number text
  const numberValue = document.createElement("div");
  numberValue.classList.add("number-value");
  numberValue.textContent = i;

  // Visual dots (🍎)
  const visual = document.createElement("div");
  visual.classList.add("number-visual");
  visual.textContent = "🍎".repeat(i <= 20 ? i : 20); 
  // cap at 20 to avoid overflow

  card.appendChild(numberValue);
  card.appendChild(visual);

  // Click → speak number
  card.addEventListener("click", () => {
  speak(i.toString());
  launchConfetti();
});


  numbersContainer.appendChild(card);
}

// Speech function
function speakNumber(num) {
  const speech = new SpeechSynthesisUtterance(num.toString());
  speech.rate = 0.8;
  speech.pitch = 1.2;
  window.speechSynthesis.speak(speech);
}
