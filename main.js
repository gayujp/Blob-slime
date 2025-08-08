const microbe = document.getElementById("microbe");
const phraseBox = document.getElementById("phrase");

const phrases = [
  "Sequencing ribosomal RNA...",
  "Adjusting osmotic pressure...",
  "Synthesizing ATP...",
  "Measuring pH of cytoplasm...",
  "Transcribing DNA to mRNA...",
  "Mutating... just for fun!",
  "Rebuilding cell wall...",
  "Checking for plasmid exchange...",
  "Counting mitochondria...",
  "Analyzing nutrient gradients..."
];

const sounds = ["sounds/blip.mp3", "sounds/pop.mp3", "sounds/boing.mp3"];

// Floating animation
function moveMicrobe() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  microbe.style.transform = `translate(${x}px, ${y}px)`;
}

// Color change based on fake data
function changeColor() {
  const pH = Math.random() * 14;
  const temp = Math.random() * 40;
  let color = "white";
  if (pH < 6) color = "lightblue";
  else if (pH > 8) color = "lightgreen";
  else color = "pink";

  if (temp > 30) color = "orange";

  microbe.style.filter = `drop-shadow(0 0 20px ${color})`;
}

// Show science-y phrase
function newPhrase() {
  phraseBox.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}

// Play random sound
function randomSound() {
  const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
  audio.play();
  setTimeout(randomSound, Math.random() * 4000 + 2000);
}

// When clicked → float away + “dance”
microbe.addEventListener("click", () => {
  moveMicrobe();
  microbe.style.transform += " rotate(20deg) scale(1.1)";
  setTimeout(() => microbe.style.transform = microbe.style.transform.replace(/ rotate.*$/, ""), 500);
});

// Start after first click (browsers block autoplay)
document.addEventListener("click", () => {
  if (!window.microbeStarted) {
    window.microbeStarted = true;
    setInterval(moveMicrobe, 2000);
    setInterval(changeColor, 1500);
    setInterval(newPhrase, 2500);
    randomSound();
  }
});