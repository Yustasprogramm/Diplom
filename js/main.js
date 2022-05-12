
$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    // nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    // prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});


// Функции для следующих кнопок: главная, услуги, о компании, связаться, о программе, отзывы

// Функция 1
// function scrollTo(element) {
//   window.scroll({
//     left: 0,
//     top: element.offsetTop,
//     behavior: 'smooth'
//   })
// }

// var button1 = document.querySelector('.button5');
// var news = document.querySelector('.news');

// button1.addEventListener('click', () => {
//   scrollTo(news);
// });  


//Навигация по странице кнопки header
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}







// Функция для кнопки скролл вверх
function backToTop() {
  let button = $('.back-to-top');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
  } else {
    button.fadeOut();
  }
  });

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
  })
}

backToTop();


$('.feedback__slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
