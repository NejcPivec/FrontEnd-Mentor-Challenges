const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".header-image", { x: "-100vw", ease: "power2.in" })
  .from(".header-left", { x: "100vw", ease: "power2.in" });
