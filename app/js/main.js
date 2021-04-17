$ (function () {

  $('.burger-btn, .nav-menu a').on('click', function () {
    $('.nav-menu').toggleClass('nav-menu__active');
    $('.body').toggleClass('body__active');
  });

  // $('.footer__subtitle--services').on('click', function() {
  //   $('.footer__wrapper--services').slideToggle();
  // });

  $('.slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  mixitup('.product__items', {
      selectors: {
        control: '.product__button'
      }
  });
  
  mixitup('.new-design__products', {
      selectors: {
        control: '.new-design__btn'
      }
    });

  $('.partner__list').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 343,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});