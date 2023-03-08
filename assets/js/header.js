//Menu Mobile - add classe menu-active

const btnMobile = document.getElementById('btn-menuMobile');
const menu = document.querySelector('.header__nav');

btnMobile.addEventListener('click',() => {
  menu.classList.toggle('menu-active')
});

