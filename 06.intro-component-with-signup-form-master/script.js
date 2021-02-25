// DOM selectors
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Submit event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Typed values
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (firstNameValue === "") {
    addError("firstName", "First Name cannot be empty");
  } else {
    removeError("firstName");
  }

  if (lastNameValue === "") {
    addError("lastName", "Last Name cannot be empty");
  } else {
    removeError("lastName");
  }

  if (emailValue === "") {
    addError("email", "Email cannot be empty");
  } else if (!validateEmail(email)) {
    addError("email", "Email is not valid");
  } else {
    removeError("email");
  }

  if (passwordValue === "") {
    addError("password", "Password cannot be empty");
  } else {
    removeError("password");
  }
});

// Add error
const addError = (inputField, msg) => {
  const small = form[inputField].parentNode.querySelector("small");
  const img = form[inputField].parentNode.querySelector("img");
  const input = form[inputField].parentNode.querySelector("input");
  small.innerText = msg;
  small.style.opacity = 1;
  img.style.opacity = 1;
  input.style.border = "2px solid var(--red-color)";
};

// remove error
const removeError = (inputField) => {
  const small = form[inputField].parentNode.querySelector("small");
  const img = form[inputField].parentNode.querySelector("img");
  const input = form[inputField].parentNode.querySelector("input");
  small.style.opacity = 0;
  img.style.opacity = 0;
  input.style.border = "1px solid var(--dark-blue-color)";
};

// Validate email address
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
