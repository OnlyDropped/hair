$(function() {

	$('.price__file').styler({
    fileBrowse: 'Выбрать',
  });

});

const btn = document.querySelector('.header-top__btn');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const headerNav = document.querySelector('.header-nav');

btn.addEventListener('click', ()=>{
  btn.classList.toggle('header-top__btn--active')
  headerNav.classList.toggle('header-nav--active')
})

$(function() {

	$('.price__file').styler({
    fileBrowse: 'Выбрать',
  });

});


$('.advantage-slider').slick({
  cssEase: 'ease-out',
  dots: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 610,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})

$('.review__slider').slick({
  cssEase: 'ease-out',
  dots: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 871,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})
