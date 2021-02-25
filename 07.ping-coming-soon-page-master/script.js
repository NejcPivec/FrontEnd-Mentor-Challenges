/* Please provide a valid email address */

// DOM elements
const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isEmail(email.value)) {
    addError("email", "Please provide a valid email address");
  } else {
    removeError("email");
  }
});

/* Validate email */
const isEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Add error
const addError = (field, msg) => {
  const small = form[field].parentNode.querySelector("small");
  const input = form[field].parentNode.querySelector("input");
  small.innerText = msg;
  input.style.border = "1.5px solid var(--red-color)";
};

// Add error
const removeError = (field) => {
  const small = form[field].parentNode.querySelector("small");
  const input = form[field].parentNode.querySelector("input");
  small.innerText = "";
  input.style.border = "1px solid hsla(223, 87%, 63%, 0.3)";
};
