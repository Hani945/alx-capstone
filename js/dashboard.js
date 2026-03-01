const greeting = document.getElementById("kid-greeting");
const statsEl = document.getElementById("progress-stats");

const stats = getProgress();

const accuracy =
  stats.total === 0
    ? 0
    : Math.round((stats.correct / stats.total) * 100);

greeting.textContent = `Great work, ${getKidName()}! 🌟`;

statsEl.textContent =
  `You got ${stats.correct} correct out of ${stats.total} tries. Accuracy: ${accuracy}%`;
