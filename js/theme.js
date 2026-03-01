function applyTheme() {
  const profiles = JSON.parse(localStorage.getItem("kidsProfiles") || "[]");
  const active = localStorage.getItem("activeKid");

  const profile = profiles.find(p => p.name === active);
  if (!profile) return;

  document.body.classList.add(`theme-${profile.theme || "girls"}`);
}

applyTheme();

const darkBtn = document.getElementById("dark-toggle");

let dark = localStorage.getItem("darkMode") === "true";

function applyDark() {
  document.body.classList.toggle("dark-mode", dark);

  if (darkBtn) {
    darkBtn.textContent = dark ? "☀️ Day" : "🌙 Night";
  }
}

darkBtn?.addEventListener("click", () => {
  dark = !dark;
  localStorage.setItem("darkMode", dark);
  applyDark();
});

applyDark();

