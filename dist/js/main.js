$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img src="img/arrows-left.svg" alt="arrows-left"  class="slider-arrows slider-arrows__left">',
    nextArrow:
      '<img src="img/arrows-right.svg" alt="arrows-right" class="slider-arrows slider-arrows__right">',
    asNavFor: ".slider-dots-header",
  });

  $(".slider-dots-header").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 25,
    focusOnSelect: true,
    asNavFor: ".slider-map",
    prevArrow:
      '<img src="img/arrows-left.svg" alt="arrows-left"  class="slider-arrows slider-arrows__left">',
    nextArrow:
      '<img src="img/arrows-right.svg" alt="arrows-right" class="slider-arrows slider-arrows__right">',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".surf-slider",
  });
});
