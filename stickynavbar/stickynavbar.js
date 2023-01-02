const navbarEl = document.querySelector(".navbar");
const botomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    botomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
