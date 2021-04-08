$ (function () {

  $('.burger-btn, .nav-menu a').on('click', function () {
    $('.nav-menu').toggleClass('nav-menu__active');
    $('.body').toggleClass('body__active');
  });

  $('.slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  mixitup('.product__items', {
      selectors: {
        control: '.product__btn'
      }
  });
  
  mixitup('.new-design__products', {
      selectors: {
        control: '.new-design__btn'
      }
    });
});