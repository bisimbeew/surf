const parametersBtn = document.querySelector (".parameters_btn");
const parametersBtnMenu = document.querySelector (".parameters-btn_menu");

parametersBtn.addEventListener('mouseover', e=>{
   e.preventDefault();
   parametersBtnMenu.style.display = 'block';
});
parametersBtn.addEventListener('mouseout', e=>{
    e.preventDefault();
    parametersBtnMenu.style.display = 'none';
 });
