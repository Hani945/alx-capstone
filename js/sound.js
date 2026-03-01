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
function speak(text, mood = "normal") {
  if (!soundEnabled) return;

  const speech = new SpeechSynthesisUtterance(text);

  // Try to select a female voice if available
  const voices = window.speechSynthesis.getVoices();
  const femaleVoice = voices.find(voice =>
    voice.name.toLowerCase().includes("female") ||
    voice.name.toLowerCase().includes("zira") ||
    voice.name.toLowerCase().includes("samantha")
  );

  if (femaleVoice) {
    speech.voice = femaleVoice;
  }

  // Preschool teacher energy tuning 🎈
  if (mood === "excited") {
    speech.rate = 0.9;
    speech.pitch = 1.5;
  } else if (mood === "encourage") {
    speech.rate = 0.85;
    speech.pitch = 1.4;
  } else {
    speech.rate = 0.8;
    speech.pitch = 1.3;
  }

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
