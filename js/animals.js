const animalsContainer = document.getElementById("animals-container");

// Animal data
const animals = [
  { name: "Dog", image: "assets/images/dog.png", sound: "assets/sounds/dog.mp3" },
  { name: "Cat", image: "assets/images/cat.png", sound: "assets/sounds/cat.mp3" },
  { name: "Lion", image: "assets/images/lion.png", sound: "assets/sounds/lion.mp3" },
  { name: "Elephant", image: "assets/images/elephant.png", sound: "assets/sounds/elephant.mp3" },
  { name: "Monkey", image: "assets/images/monkey.png", sound: "assets/sounds/monkey.mp3" },
  { name: "Cow", image: "assets/images/cow.png", sound: "assets/sounds/cow.mp3" }
];


// Create animal cards
animals.forEach(animal => {
  const card = document.createElement("div");
  card.classList.add("animal-card");

  const img = document.createElement("img");
  img.src = animal.image;
  img.alt = animal.name;

  const name = document.createElement("div");
  name.classList.add("animal-name");
  name.textContent = animal.name;

  card.appendChild(img);
  card.appendChild(name);

  // Click → speak animal name
  card.addEventListener("click", () => {
  speak(animal.name, "excited");
  launchConfetti();

  if (soundEnabled) {
    const audio = new Audio(animal.sound);
    audio.play();
  }
});



  animalsContainer.appendChild(card);
});

// Speech function
function speakAnimal(name) {
  const speech = new SpeechSynthesisUtterance(name);
  speech.rate = 0.8;
  speech.pitch = 1.2;
  window.speechSynthesis.speak(speech);
}
