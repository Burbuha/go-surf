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
    infinite: true,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: ".slider-map",
    prevArrow:
      '<img src="img/arrows-left.svg" alt="arrows-left"  class="slider-arrows slider-arrows__left">',
    nextArrow:
      '<img src="img/arrows-right.svg" alt="arrows-right" class="slider-arrows slider-arrows__right">',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: false,
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
    responsive: [
      {
        breakpoint: 1041,
        settings: {
          slidesToShow: 3,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".holder__slider, .shop__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<img src="img/arrows-left.svg" alt="arrows-left"  class="slider-arrows holder-arrows slider-arrows__left">',
    nextArrow:
      '<img src="img/arrows-right.svg" alt="arrows-right" class="slider-arrows holder-arrows slider-arrows__right">',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".quantity input");

  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    let parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".nights", parents).val() *
      $(".summ", parents).data("guests") *
      $(".guests", parents).val();

    $(".summ", parents).html("$ " + summ);
  });

  //здесь рассчитывает сумму с исходными значениями !
  $(".quantity").each(function () {
    let parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".nights", parents).val() *
      $(".summ", parents).data("guests") *
      $(".guests", parents).val();

    $(".summ", parents).html("$ " + summ);
  });

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".menu").toggle("active");
    $(this).toggleClass("rotate");
  });
});
