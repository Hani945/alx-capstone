// Global sound state
let soundEnabled = localStorage.getItem("soundEnabled");

if (soundEnabled === null) {
  soundEnabled = true;
  localStorage.setItem("soundEnabled", "true");
} else {
  soundEnabled = soundEnabled === "true";
}

// Update button icon
function updateSoundButton() {
  const btn = document.querySelector(".sound-btn");
  if (!btn) return;

  btn.textContent = soundEnabled ? "🔊" : "🔇";
}

// Toggle sound
function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem("soundEnabled", soundEnabled);
  updateSoundButton();
}

// Safe speech wrapper
function speak(text) {
  if (!soundEnabled) return;

  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 0.8;
  speech.pitch = 1.2;
  window.speechSynthesis.speak(speech);
}

// Init on load
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".sound-btn");
  if (btn) {
    btn.addEventListener("click", toggleSound);
    updateSoundButton();
  }
});
