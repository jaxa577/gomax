document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".gmx-swiper", {
    direction: "horizontal",
    spaceBetween: 52,
    slidesPerView: 6.5,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 52,
      },
    },
  });
});

let navOverlay = document.querySelector(".nav__overlay");
let burgerBtn = document.querySelector(".header__burger-btn");
const isNavActive = () => navOverlay.classList.contains("active");
burgerBtn.addEventListener("click", () => {
  navOverlay.classList.toggle("active");
  burgerBtn.classList.toggle("active");

  document.body.style.overflow = isNavActive() ? "hidden" : "unset";
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
