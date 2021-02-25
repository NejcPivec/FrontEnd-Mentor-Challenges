const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const boys = document.querySelectorAll(".boy");
const girls = document.querySelectorAll(".girl");

const timeline = gsap.timeline({ defaults: { duration: 1 } });

prev.addEventListener("click", () => {
  boys.forEach((boy) => {
    boy.classList.toggle("show");
  });

  girls.forEach((girl) => {
    girl.classList.toggle("show");
  });
});

next.addEventListener("click", () => {
  boys.forEach((boy) => {
    boy.classList.toggle("show");
  });

  girls.forEach((girl) => {
    girl.classList.toggle("show");
  });
});

timeline
  .from(".left", { y: "-100vh", ease: "power2.in" })
  .from(".right", { y: "100vh", ease: "power2.in" });
