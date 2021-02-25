const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailText = email.value;

  if (emailText === "") {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});
