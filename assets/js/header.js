//Menu Mobile - add classe menu-active

const btnMobile = document.getElementById('btn-menuMobile');
const menu = document.querySelector('.header__nav');

btnMobile.addEventListener('click',() => {
  menu.classList.toggle('menu-active')
});

//popup 

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

//add e remover a classe active
loginLink.addEventListener('click', ()=>{
  wrapper.classList.add('active');
});

registerLink.addEventListener('click', ()=>{
  wrapper.classList.remove('active');
});

// fechar o popup 
const btnPopUp = document.querySelector('.btn-restrito');
const btnClose = document.querySelector('.icon-close');
console.log(btnClose);

btnPopUp.addEventListener('click', ()=>{
 wrapper.classList.toggle('active-popup');
});
btnClose.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup');
})