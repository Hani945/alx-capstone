let kidName = localStorage.getItem("kidName");

function askKidName() {
  if (!kidName) {
    kidName = prompt("Hi! What's your name? 😊");

    if (kidName && kidName.trim() !== "") {
      localStorage.setItem("kidName", kidName);
    } else {
      kidName = "Superstar";
    }
  }
}

function getKidName() {
  return kidName || "Superstar";
}

// Run on load
askKidName();
