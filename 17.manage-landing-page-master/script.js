// DOM selectors
const form = document.getElementById("form");
const email = document.getElementById("email");
const width = window.innerWidth;

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

console.log(width);

// Regex - email validaton
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Window with for the slider:
if (width === 768) {
  // Carousel slider
  window.addEventListener("load", function () {
    new Glider(document.querySelector(".carousel-cards"), {
      slidesToShow: 2,
      slidesToScroll: 4,
      draggable: true,
      dragVelocity: 1.5,
    });
  });
} else if (width === 716) {
  // Carousel slider
  window.addEventListener("load", function () {
    new Glider(document.querySelector(".carousel-cards"), {
      slidesToShow: 1,
      slidesToScroll: 4,
      draggable: true,
      dragVelocity: 1.5,
    });
  });
} else {
  // Carousel slider
  window.addEventListener("load", function () {
    new Glider(document.querySelector(".carousel-cards"), {
      slidesToShow: 3,
      slidesToScroll: 4,
      draggable: true,
      dragVelocity: 1.5,
    });
  });
}

// Form section
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value;

  if (!validateEmail(emailValue)) {
    email.style.border = "2px solid var(--red)";
    form.classList.add("error");
  } else {
    email.style.border = "none";
    form.classList.remove("error");
  }
});

// Hamburger menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("show");
});
