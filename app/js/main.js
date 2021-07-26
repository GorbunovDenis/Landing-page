$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
    // responsive: [
    //   {
    //     breakpoint: 969,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass(
      'tabs-content--active',
    );
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
    $('.product-slider').slick('setPosition');
  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  });

  $('.product-slider').slick({
    slidesToShow: 4,
    slideToScroll: 1,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-black-left.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });

  $('.js-range-slider').ionRangeSlider({
    grid: false,
    type: 'double',
    min: 100000,
    max: 500000,
  });

  $('.catalog__btn-grid').on('click', function () {
    $(this).addClass('catalog__button--active');
    $('.catalog__btn-line').removeClass('catalog__button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });
  $('.catalog__btn-line').on('click', function () {
    $(this).addClass('catalog__button--active');
    $('.catalog__btn-grid').removeClass('catalog__button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  $('.rateyo').rateYo({
    ratedFill: '#1C62CD',
    spacing: '7px',
    normalFill: '#c4c4c4',
  });

  $('.menu__btn').on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile__list--active');
  });

  $('.footer__top-drop').on('click', function () {
    $(this).next().slideToggle(1000);
    $(this).slideToggle('footer__top-drop--active');
  });

  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();
  });
});
