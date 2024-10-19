document.addEventListener('DOMContentLoaded', function () {
  var swiperElement = document.querySelector('.swiper');
  if (swiperElement) {
    var swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      centeredSlides: true,
      speed: 1000,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: -120,
        depth: 400,
        modifier: 1,
        slideShadows: false,
      },
    });

    swiper.autoplay.start();
    const btnStart = document.querySelector('.swiper__btn-start');
    const btnPause = document.querySelector('.swiper__btn-pause');

    btnStart.addEventListener('click', () => {
      swiper.autoplay.start();
    });
    btnPause.addEventListener('click', () => {
      swiper.autoplay.stop();
    });
  } else {
    console.error('Swiper element not found');
  }
});
