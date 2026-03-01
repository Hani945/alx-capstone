document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("animated-bg-img");
  if (!bg) return;

  const activeKid = localStorage.getItem("activeKid");
  const profiles = JSON.parse(localStorage.getItem("kidsProfiles") || "[]");
  const profile = profiles.find(p => p.name === activeKid);
  if (!profile) return;

  // Use actual images
  if (profile.theme === "girls") {
    bg.style.backgroundImage = "url('assets/images/princess-bg.jpg')";
  } else {
    bg.style.backgroundImage = "url('assets/images/cars-bg.jpg')";
  }
});
