const greeting = document.getElementById("kid-greeting");
const statsEl = document.getElementById("progress-stats");
const progressBar = document.getElementById("progress-bar");
const badgesContainer = document.getElementById("badges-container");

const stats = getProgress();

const accuracy =
  stats.total === 0
    ? 0
    : Math.round((stats.correct / stats.total) * 100);

greeting.textContent = `Great work, ${getKidName()}! 🌟`;

statsEl.textContent =
  `You got ${stats.correct} correct out of ${stats.total} tries. Accuracy: ${accuracy}%`;

// Progress bar animation
progressBar.style.width = accuracy + "%";

// Achievement Badges
badgesContainer.innerHTML = "";

if (stats.correct >= 5) {
  badgesContainer.innerHTML += `<div class="badge">🏅 5 Correct Answers!</div>`;
}

if (stats.correct >= 10) {
  badgesContainer.innerHTML += `<div class="badge">🎉 10 Superstar!</div>`;
}

if (accuracy >= 80 && stats.total >= 5) {
  badgesContainer.innerHTML += `<div class="badge">🌟 Accuracy Master!</div>`;
}
