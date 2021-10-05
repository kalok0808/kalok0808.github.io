const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

let type = new Typed(".typing-text", {
  strings: ["meaningful", "meaningful", "special", "messy", "sadness"],
  typeSpeed: 120,
  loop: true,
});
