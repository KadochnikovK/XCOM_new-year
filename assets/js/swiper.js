document.addEventListener("DOMContentLoaded", function () {
  // Первый свайпер
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
      1500: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // Второй свайпер
  const swiperFilum = new Swiper(".filumGoods", {
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
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1500: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
  });

  // Свайпер для спикеров - ВСЕГДА 1 СЛАЙД
  const swiperSpeakers = new Swiper(".swiper-container", {
    slidesPerView: 1, // Всегда видим 1 слайд
    spaceBetween: 20,
    loop: true, // Добавляет бесконечную прокрутку (опционально)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        setEqualHeight(this);
      },
      resize: function () {
        setEqualHeight(this);
      },
      slideChangeTransitionEnd: function () {
        setEqualHeight(this);
      }
    }
 
  });
});


async function setEqualHeight(swiper) {
  await setTimeout(() => console.log('Таймаут завершен', 0))

  const slides = swiper.slides;
  let maxHeight = 0;


  slides.forEach(slide => {
    const slideHeight = slide.offsetHeight;
    
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
      console.log('maxHeight', maxHeight)
    }
  });

  
  slides.forEach(slide => {
    slide.style.height = maxHeight + 'px';
    swiper.style.height = maxHeight + 'px';
  });


  swiper.update();
}