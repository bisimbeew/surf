const burgerBtn = document.querySelector(".hamburger");
const overlay = document.querySelector( ".overlay");
const wrapper = document.querySelector (".wrapper");
const closeBtn = document.querySelector (".closeBtn");

////// Модальное окно
burgerBtn.addEventListener('click', e=>{
	wrapper.style.display = 'none';
	overlay.style.display = "flex";

});

closeBtn.addEventListener('click', e=>{
	overlay.style.display = 'none';
	wrapper.style. display = 'block';
});


//////// Слайдер
const slider = $('.shop__slider').bxSlider({
   pager: false,
   controls: false
});


$(".left-arrow").click((e) => {
  e.preventDefault();
  slider.goToPrevSlide();
});


$(".right-arrow").click((e) => {
  e.preventDefault();
  slider.goToNextSlide();
});

$(document).ready(() =>{

  $('.team__item').on('click', (e)=>{
      
      $('.team__item').removeClass('item-active');

  });

  $('.team__item').on('click', function(e){
      
      $(this).addClass('item-active');

  });
  $('.shop__slider').bxSlider({
      pager: false,
      responsive: true,
  });

});