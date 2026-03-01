document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const toggleBtn = document.getElementById("music-toggle");

  if (!music || !toggleBtn) return;

  let musicOn = localStorage.getItem("musicOn") === "true";

  function applyMusicState() {
    if (musicOn) {
      music.play().catch(() => {});
      toggleBtn.textContent = "🔊 Music On";
    } else {
      music.pause();
      toggleBtn.textContent = "🔇 Music Off";
    }
  }

  toggleBtn.addEventListener("click", () => {
    musicOn = !musicOn;
    localStorage.setItem("musicOn", musicOn);
    applyMusicState();
  });

  applyMusicState();
});
document.addEventListener("DOMContentLoaded", () => {
  const voiceBtn = document.getElementById("voice-toggle");
  let voiceOn = localStorage.getItem("voiceOn") === "true";

  function applyVoiceState() {
    if (voiceBtn) voiceBtn.textContent = voiceOn ? "🗣️ Voice On" : "🗣️ Voice Off";
  }

  voiceBtn?.addEventListener("click", () => {
    voiceOn = !voiceOn;
    localStorage.setItem("voiceOn", voiceOn);
    applyVoiceState();
  });

  applyVoiceState();
});
