$("#feature-work").owlCarousel({
  margin: 15,
  nav: true,
  navText: [
    "<img src='assets/images/arrow-left.png'>",
    "<img src='assets/images/arrow-right.png'>",
  ],
  autoplayHoverPause: false,
  dots: false,
  lazyLoad: true,
  responsive: {
    0: {
      items: 2.5,
      margin: 65,
    },
    376: {
      items: 2.5,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 3,
    },
  },
});

$("#our-team").owlCarousel({
  margin: 30,
  dots: true,
  nav: true,
  navText: [
    "<img src='/assets/images/btn-left.png'>",
    "<img src='/assets/images/btn-right.png'>",
  ],
  autoplayHoverPause: false,
  lazyLoad: true,
  responsive: {
    0: {
      items: 2.1,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 3.5,
    },
  },
});

$(document).on("mousemove", function (e) {
  let distant = $(".site-menu").innerHeight();
  if ($(window).scrollTop() > distant) {
    if (
      e.pageY - $(window).scrollTop() <= distant ||
      $(".site-menu:hover").length != 0
    ) {
      $(".site-menu").addClass("fixed");
    } else {
      $(".site-menu").removeClass("fixed");
    }
  }
});

$(".hamburger").click(function (e) {
  $(".site-menu > ul").toggleClass("active");
  $(".hamburger").toggleClass("active");
});
