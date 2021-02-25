// DOM Elements
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Event Listener
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("show");
});
