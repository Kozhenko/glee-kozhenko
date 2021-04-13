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
});