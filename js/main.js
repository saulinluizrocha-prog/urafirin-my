$(document).ready(function () {
  function startCountdown() {
    const hoursEl = document.querySelector(
      "#COUNTDOWN_ITEM529 .ladi-countdown-text span"
    );
    const minutesEl = document.querySelector(
      "#COUNTDOWN_ITEM530 .ladi-countdown-text span"
    );
    const secondsEl = document.querySelector(
      "#COUNTDOWN_ITEM531 .ladi-countdown-text span"
    );

    function updateTimer() {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setHours(23, 59, 59, 999);

      let diff = tomorrow - now;

      if (diff <= 0) diff = 0;

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(
        2,
        "0"
      );
      const minutes = String(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
      );

      hoursEl.textContent = hours;
      minutesEl.textContent = minutes;
      secondsEl.textContent = seconds;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  startCountdown();

  $(".js_slider-1").slick({
    infinite: false,
    slidesToShow: 4,
    prevArrow: $(".slider_1-left"),
    nextArrow: $(".slider_1-right"),
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(window).on("resize", function () {
    $(".js_slider-1").slick("resize");
  });
  $(".js_slider-2").slick({
    infinite: false,
    slidesToShow: 3,
    prevArrow: $(".slider_2-left"),
    nextArrow: $(".slider_2-right"),
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(window).on("resize", function () {
    $(".js_slider-2").slick("resize");
  });
  $(".block7__slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: false,
    asNavFor: ".block7__slider1",
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".block7__slider1").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: ".block7__slider2",
    dots: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  });
  // step anim
  (function (globalObj) {
    function animationDetect(animationsElements, innerElementsClass) {
      this.WINDOW = window;
      this.animateElements = $(animationsElements);
      this.innerElementsClass = innerElementsClass;
      this._setSizes();
      this._setEvents();
      return this;
    }
    animationDetect.prototype._setSizes = function () {
      this.wh = this.WINDOW.innerHeight;
      this.whTop = this.wh * 0.1;
      this.whBottom = this.wh * 0.6;
    };
    animationDetect.prototype._setAnimation = function (element) {
      var innerElements = $(element).find(this.innerElementsClass);
      $(element).addClass($(element).data("animation") + " animated");
      if (innerElements) {
        innerElements.each(function () {
          $(this).addClass("delay " + $(this).data("animation") + " animated");
        });
      }
    };
    animationDetect.prototype._setEvents = function () {
      var _this = this;
      if (_this.WINDOW) {
        $(_this.WINDOW)
          .on("scroll", function () {
            var scrolled = $(this).scrollTop(),
              scrollTop = scrolled + _this.whTop,
              scrollBottom = scrollTop + _this.whBottom;
            _this.animateElements.each(function () {
              var offsetTopElement = $(this).offset().top,
                offsetBottomElement = offsetTopElement + $(this).height();
              if (
                offsetTopElement <= scrollBottom &&
                offsetBottomElement >= scrollTop
              )
                _this._setAnimation(this);
            });
          })
          .scroll();
        $(this.WINDOW).on("resize", function () {
          _this._setSizes();
        });
      }
    };
    $(globalObj).ready(function () {
      new animationDetect(".js-animate", ".js-animate-inner");
    });
  })(document);
  // step anim end
});
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
 