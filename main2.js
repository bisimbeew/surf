const burgerBtn = document.querySelector(".hamburger");
const overlay = document.querySelector( ".overlay");
const wrapper = document.querySelector (".wrapper");

burgerBtn.addEventListener('click', e=>{
	wrapper.style.display = 'none';
	overlay.style.display = "flex";

});