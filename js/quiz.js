const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const optionsContainer = document.getElementById("quiz-options");
const playBtn = document.getElementById("play-sound");
const messageEl = document.getElementById("quiz-message");
const scoreDisplay = document.getElementById("score-display");

let correctAnswer = "";
let score = 0;

// Start first question
generateQuestion();

playBtn.addEventListener("click", () => {
  speak(correctAnswer);
});

// Generate new question
function generateQuestion() {
  optionsContainer.innerHTML = "";

  // pick correct letter
  correctAnswer = letters[Math.floor(Math.random() * letters.length)];

  // build options
  const options = new Set([correctAnswer]);

  while (options.size < 4) {
    const randomLetter =
      letters[Math.floor(Math.random() * letters.length)];
    options.add(randomLetter);
  }

  const shuffled = Array.from(options).sort(() => Math.random() - 0.5);

  shuffled.forEach(letter => {
    const btn = document.createElement("div");
    btn.className = "quiz-option";
    btn.textContent = letter;

    btn.addEventListener("click", () => checkAnswer(letter));

    optionsContainer.appendChild(btn);
  });
}

// Check answer
function checkAnswer(selected) {
  if (selected === correctAnswer) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    messageEl.textContent = "🎉 Correct! Great job!";
    speak("Great job");
    launchConfetti();

    setTimeout(generateQuestion, 900);
  } else {
    messageEl.textContent = "😊 Try again!";
    speak("Try again");
  }
}
