// Simple confetti generator
function launchConfetti() {
  const duration = 800;
  const end = Date.now() + duration;

  const colors = ["#FFD93D", "#FF6B6B", "#6BCB77", "#4DA8DA"];

  (function frame() {
    const confettiCount = 5;

    for (let i = 0; i < confettiCount; i++) {
      createConfettiPiece(colors);
    }

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function createConfettiPiece(colors) {
  const confetti = document.createElement("div");
  confetti.className = "confetti-piece";

  const size = Math.random() * 8 + 6;
  confetti.style.width = size + "px";
  confetti.style.height = size + "px";
  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.top = "-10px";

  document.body.appendChild(confetti);

  const fallDuration = Math.random() * 800 + 600;

  confetti.animate(
    [
      { transform: "translateY(0px) rotate(0deg)", opacity: 1 },
      {
        transform: `translateY(${window.innerHeight}px) rotate(360deg)`,
        opacity: 0,
      },
    ],
    {
      duration: fallDuration,
      easing: "ease-out",
    }
  );

  setTimeout(() => confetti.remove(), fallDuration);
}
