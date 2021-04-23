$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    postfix: ".00",
    // step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

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

  const product__items = document.querySelector('.product__items')
  if (product__items) {
    // блок существует
    mixitup('.product__items', {
      selectors: {
        control: '.product__button'
      }
    });
  }

  const design__products = document.querySelector('.new-design__products')
  if (design__products) {
    // блок существует
    mixitup('.new-design__products', {
      selectors: {
        control: '.new-design__btn'
      }
    });
  }

  const partner__list = document.querySelector('.partner__list')
  if (partner__list) {
    // блок существует
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
  }

});