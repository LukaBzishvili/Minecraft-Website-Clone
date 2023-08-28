//Viewportsize Code
////////////////////////////////////////////////////////////////////////////////////
(function (n) {
  (n.viewportSize = {}),
    (n.viewportSize.getHeight = function () {
      return t("Height");
    }),
    (n.viewportSize.getWidth = function () {
      return t("Width");
    });
  var t = function (t) {
    var f,
      o = t.toLowerCase(),
      e = n.document,
      i = e.documentElement,
      r,
      u;
    return (
      n["inner" + t] === undefined
        ? (f = i["client" + t])
        : n["inner" + t] != i["client" + t]
        ? ((r = e.createElement("body")),
          (r.id = "vpw-test-b"),
          (r.style.cssText = "overflow:scroll"),
          (u = e.createElement("div")),
          (u.id = "vpw-test-d"),
          (u.style.cssText = "position:absolute;top:-1000px"),
          (u.innerHTML =
            "<style>@media(" +
            o +
            ":" +
            i["client" + t] +
            "px){body#vpw-test-b div#vpw-test-d{" +
            o +
            ":7px!important}}</style>"),
          r.appendChild(u),
          i.insertBefore(r, e.head),
          (f = u["offset" + t] == 7 ? i["client" + t] : n["inner" + t]),
          i.removeChild(r))
        : (f = n["inner" + t]),
      f
    );
  };
})(this);
////////////////////////////////////////////////////////////////////////////////////
if (viewportSize.getWidth() > 575) {
  $(".slick_track").slick({
    slidesToShow: $(window).width() < 1200 ? 2 : 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
  });

  $(".slide_game_box").css({
    width: "220px",
    height: "478px",
  });
  $("a[data-slide]").click(function (e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $(".slider-nav").slick("slickGoTo", slideno - 1);
  });

  $("#prev-btn").click(function () {
    $(".slider-nav").slick("slickPrev");
    console.log("Prev");
  });

  $("#next-btn").click(function () {
    $(".slider-nav").slick("slickNext");
    console.log("Next");
  });

  updateSliderLayout($(".slider1"));
  $(window).resize(function () {
    updateSliderLayout($(".slider1"));
  });

  function updateSliderLayout() {
    const windowWidth = $(window).width();

    let slidesToShow = 3;
    if (windowWidth < 1201) {
      slidesToShow = windowWidth < 768 ? 1 : 2;
    }

    $(".slick_track").slick(
      "slickSetOption",
      "slidesToShow",
      slidesToShow,
      true
    );

    const slideWidth = 220;
    const gap = 20;
    const totalWidth = slideWidth * slidesToShow + gap * (slidesToShow - 1);
    $(".slick_track").css("width", totalWidth + "px");
    $(".slick-slide").css("margin-right", gap + "px");

    const sliderContainerWidth = $(".slick_list").width();
    const sliderTrackWidth = $(".slick_track").width();
    const margin = (sliderContainerWidth - sliderTrackWidth) / 2;
    $(".slick_track").css("margin-left", margin + "px");
  }

  updateSliderLayout(); // Call the function on initial load

  // Call the updateSliderLayout function on window resize
  $(window).resize(function () {
    updateSliderLayout();
  });
}
