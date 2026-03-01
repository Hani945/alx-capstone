// Initialize stats
function initProgress() {
  if (!localStorage.getItem("quizStats")) {
    localStorage.setItem(
      "quizStats",
      JSON.stringify({
        correct: 0,
        total: 0
      })
    );
  }
}

function updateProgress(isCorrect) {
  const stats = JSON.parse(localStorage.getItem("quizStats"));

  stats.total++;
  if (isCorrect) stats.correct++;

  localStorage.setItem("quizStats", JSON.stringify(stats));
}

function getProgress() {
  return JSON.parse(localStorage.getItem("quizStats"));
}

initProgress();
