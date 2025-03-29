let navOverlay = document.querySelector(".nav__overlay");
let burgerBtn = document.querySelector(".header__burger-btn");

burgerBtn.addEventListener("click", () => {
  navOverlay.classList.toggle("active");
  burgerBtn.classList.toggle("active");
  document.body.style.overflow = "hidden";
});

navOverlay.addEventListener("click", (evt) => {
  if (evt.target.closest(".nav__overlay-container")) {
    return;
  } else {
    navOverlay.classList.remove("active");
    burgerBtn.classList.remove("active");
    document.body.style.overflow = "unset";
  }
});
