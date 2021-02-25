// DOM Elements
const bookmarkText = document.querySelector(".bookmark-text");
const searchText = document.querySelector(".search-text");
const shareText = document.querySelector(".share-text");

const bookmark = document.querySelector(".bookmark");
const search = document.querySelector(".search");
const share = document.querySelector(".share");

const form = document.getElementById("form");
const email = document.getElementById("email");
const errorIcon = document.querySelector(".email .error-icon");
const errorText = document.querySelector(".email small");

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const social = document.querySelector(".header-social");
const mainLogo = document.querySelector(".first-logo");
const secondLogo = document.querySelector(".second-logo");

// Features slider
bookmarkText.addEventListener("click", () => {
  bookmarkText.classList.add("active");
  searchText.classList.remove("active");
  shareText.classList.remove("active");

  bookmark.style.display = "grid";
  search.style.display = "none";
  share.style.display = "none";
});

searchText.addEventListener("click", () => {
  searchText.classList.add("active");
  bookmarkText.classList.remove("active");
  shareText.classList.remove("active");

  bookmark.style.display = "none";
  search.style.display = "grid";
  share.style.display = "none";
});

shareText.addEventListener("click", () => {
  shareText.classList.add("active");
  searchText.classList.remove("active");
  bookmarkText.classList.remove("active");

  bookmark.style.display = "none";
  search.style.display = "none";
  share.style.display = "grid";
});

/* Email validation */
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value;

  if (!validateEmail(emailValue)) {
    errorIcon.style.opacity = "1";
    errorText.style.opacity = "1";
    email.style.border = "2px solid var(--soft-red";
  } else {
    errorIcon.style.opacity = "0";
    errorText.style.opacity = "0";
    email.style.border = "none";
  }
});

// Hamburger menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("show");
  social.classList.toggle("show");
  mainLogo.classList.toggle("show");
  secondLogo.classList.toggle("show");
});
