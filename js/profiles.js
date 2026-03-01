const container = document.getElementById("profiles-container");
const addBtn = document.getElementById("add-profile-btn");
const nameInput = document.getElementById("new-profile-name");

// Load profiles
function getProfiles() {
  return JSON.parse(localStorage.getItem("kidsProfiles") || "[]");
}

function saveProfiles(profiles) {
  localStorage.setItem("kidsProfiles", JSON.stringify(profiles));
}

// Active kid
function setActiveKid(name) {
  localStorage.setItem("activeKid", name);
  window.location.href = "index.html";
}

// Render profiles
function renderProfiles() {
  const profiles = getProfiles();
  container.innerHTML = "";

  profiles.forEach(name => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.textContent = `🧒 ${name}`;

    card.addEventListener("click", () => {
      setActiveKid(name);
    });

    container.appendChild(card);
  });
}

// Add new profile
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) return;

  const profiles = getProfiles();

  if (!profiles.includes(name)) {
    profiles.push(name);
    saveProfiles(profiles);
  }

  nameInput.value = "";
  renderProfiles();
});

renderProfiles();
