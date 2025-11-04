document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".firstWebinar", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
       1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
       1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});
