$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="img/arrows-left.svg" alt="arrows-left"  class="slider-arrows slider-arrows__left">',
    nextArrow:
      '<img src="img/arrows-right.svg" alt="arrows-right" class="slider-arrows slider-arrows__right">',
    asNavFor: ".slider-dots",
  });
  $(".slider-dots").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    asNavFor: ".header__slider",
  });
});
