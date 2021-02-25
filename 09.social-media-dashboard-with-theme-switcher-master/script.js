// DOM Elements
const checkbox = document.getElementById("checkbox");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const cards = document.querySelectorAll(".card");

checkbox.addEventListener("change", () => {
  body.classList.toggle("light");
  nav.classList.toggle("light");

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("light");
  }
});
