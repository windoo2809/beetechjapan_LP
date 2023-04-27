$("#feature-work").owlCarousel({
  margin: 10,
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
      items: 1,
    },
    600: {
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
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    1900: {
      items: 3,
    },
  },
});