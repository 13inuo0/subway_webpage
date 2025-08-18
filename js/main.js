window.addEventListener("load", function () {
  // 배너 스와이퍼
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
  // 샌드위치 메뉴 스와이퍼
  const itemSwiper = new Swiper(".food-menu", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
  
    // nav에 마우스 엔터 했을때 즉 호버했을때
  const headerMenu = document.querySelector(".header-menu");
  const headerBg = document.querySelector(".header-bg");
  headerMenu.addEventListener("mouseenter", function () {
    headerBg.style.height = "400px";
  });
   // nav에 마우스 리브 했을때 즉 호버를 안했을때
   headerMenu.addEventListener("mouseleave", function () {
    headerBg.style.height = "0px";
  });
});
