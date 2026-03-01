const alphabetContainer = document.getElementById("alphabet-container");

// Alphabet data
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const phonicsMap = {
  A: "ah",
  B: "buh",
  C: "kuh",
  D: "duh",
  E: "eh",
  F: "fuh",
  G: "guh",
  H: "huh",
  I: "ih",
  J: "juh",
  K: "kuh",
  L: "luh",
  M: "mmm",
  N: "nnn",
  O: "oh",
  P: "puh",
  Q: "kwuh",
  R: "rrr",
  S: "sss",
  T: "tuh",
  U: "uh",
  V: "vvv",
  W: "wuh",
  X: "ks",
  Y: "yuh",
  Z: "zzz"
};


// Create cards dynamically
letters.forEach(letter => {
  const card = document.createElement("div");
  card.classList.add("letter-card");
  card.textContent = letter;

  // Click → speak letter
card.addEventListener("click", () => {
  const sound = phonicsMap[letter] || letter.toLowerCase();

  speak(`${letter} pronounced ${sound}!`, "excited");
  launchConfetti();
});



  alphabetContainer.appendChild(card);
});



