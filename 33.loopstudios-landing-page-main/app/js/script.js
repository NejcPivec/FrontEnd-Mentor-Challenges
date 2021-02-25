const body = document.querySelector("body");
const header = document.getElementById("header");
const btnHamburger = document.getElementById("btnHamburger");

btnHamburger.addEventListener("click", () => {
  header.classList.toggle("open");
  body.classList.toggle("noscroll");
});
