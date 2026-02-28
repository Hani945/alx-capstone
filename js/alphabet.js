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
  speak(letter);
  launchConfetti();
});


  alphabetContainer.appendChild(card);
});



