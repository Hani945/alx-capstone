document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("animated-bg-img");
  if (!bg) return;

  const activeKid = localStorage.getItem("activeKid");
  const profiles = JSON.parse(localStorage.getItem("kidsProfiles") || "[]");
  const profile = profiles.find(p => p.name === activeKid);

  if (!profile) {
    // fallback background
    bg.style.backgroundImage = "url('assets/images/default-bg.jpg')";
    return;
  }

  // Set background based on profile theme
  const themeImages = {
    girls: [
      'assets/images/princess-bg1.jpg',
      'assets/images/princess-bg2.jpg'
    ],
    boys: [
      'assets/images/cars-bg1.jpg',
      'assets/images/cars-bg2.jpg'
    ]
  };

  let images = themeImages[profile.theme] || themeImages['girls'];

  // Pick a random image from the array
  const randomIndex = Math.floor(Math.random() * images.length);
  bg.style.backgroundImage = `url('${images[randomIndex]}')`;

  // Optional: change background every 15 seconds for fun
  setInterval(() => {
    const nextIndex = Math.floor(Math.random() * images.length);
    bg.style.backgroundImage = `url('${images[nextIndex]}')`;
  }, 15000);
});
