$('.content-box.slick').slick({
    centerMode: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        //   arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
        //   arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev">&laquo;</button>',
    nextArrow: '<button type="button" class="slick-next">&laquo;</button>',
  });