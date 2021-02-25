const share = document.querySelector(".share-icon");
const sharePhone = document.querySelector(".share-icon-phone");
const bubble = document.querySelector(".speech-bubble");
const phoneFooter = document.querySelector(".phone-footer");
const footer = document.querySelector(".footer");

share.addEventListener("click", () => {
  bubble.classList.toggle("visible");

  if (window.innerWidth < 500) {
    phoneFooter.style.display = "flex";
  }
});

sharePhone.addEventListener("click", () => {
  phoneFooter.style.display = "none";
});
