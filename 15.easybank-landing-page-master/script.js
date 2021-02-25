const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const timeline = gsap.timeline({ defaults: { duration: 1 } });

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("show");
});

timeline.from(".header-left", { x: "-100vw", ease: "power2.in" });
