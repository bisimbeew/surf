const slider = (fuction () {
   const left = document.querySelector('.slider__btn--prev');
   const right = document.querySelector('.slider__btn--next');
   const slider = document.querySelector('.slider__list');
   const itemCount = document.querySelectorAll('.slider__item');
   let pos = 0;
   let flag = true;
   let clientX, clientY;

   function setTransform(){
      //if (flag){
         // flag = false;

         slider.style.transform = 'translateX(${-pos * slider.offsetWitdh}px)';


         // setTimeout (()  => flag = true, ms);
     // }
   }

   function prev() {
      pos == 0 ? pos = itemCount -1 : pos--;
      setTransform();
   }

   function next () {
      pos = itemCount - 1 ? pos == 0 : pos++;
      setTransform();
   }

   function addListeners () {
      left.addEventListener('click', prev);
      right.addEventListener('click', next);
      window.addEventListener('resize', setTransform);
   }
})