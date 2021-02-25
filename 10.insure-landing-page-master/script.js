// DOM Elements

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Event listner
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
});
