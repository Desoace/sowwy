// 🌹 EDIT YOUR PERSONAL DETAILS HERE 🌹

// 👩 Girlfriend's name
document.getElementById("gf-name").innerText = "Tanuja"; 
// Example: "Ananya"

// 💌 Memories / Messages
const memories = [
  "Our first chat ❤️",
  "That day we laughed nonstop 😄",
  "Our first photo together 📸",
  "The moment I knew you were special 🌹"
];

// 💖 Final Message
const finalMessage = "I love youuu moreee ❤️";

// 🌹 DO NOT EDIT BELOW THIS LINE (Logic) 🌹

let opened = 0;

function startGame() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
}

function revealMemory(index) {
  document.getElementById("memory-text").innerText = memories[index];
  document.getElementById("popup").classList.remove("hidden");
  opened++;

  if (opened === memories.length) {
    setTimeout(showFinal, 1000);
  }
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function showFinal() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
  document.getElementById("final-message").innerText = finalMessage;
}
