const burgerBtn = document.querySelector(".hamburger");
const overlay = document.querySelector( ".overlay");
const wrapper = document.querySelector (".wrapper");
const closeBtn = document.querySelector (".closeBtn");


burgerBtn.addEventListener('click', e=>{
	wrapper.style.display = 'none';
	overlay.style.display = "flex";

});

closeBtn.addEventListener('click', e=>{
	overlay.style.display = 'none';
	wrapper.style. display = 'block';
});

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