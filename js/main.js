const btn = document.querySelector('.header-top__btn');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

btn.addEventListener('click', ()=>{
  btn.classList.toggle('header-top__btn--active')
})