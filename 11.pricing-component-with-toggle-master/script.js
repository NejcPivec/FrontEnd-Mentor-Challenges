// DOM
const toggle = document.getElementById("toggle");
const cardToggle = document.getElementById("card-toggle");

// Eventlistener
toggle.addEventListener("change", () => {
  cardToggle.classList.toggle("show-monthly");
});
