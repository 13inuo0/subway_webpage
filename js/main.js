window.addEventListener("load", function () {
  const visualSwiper = new Swiper(".banner-swiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const itemSwiper = new Swiper(".food-menu", {
          navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"},
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      590: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});
