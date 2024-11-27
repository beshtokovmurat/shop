const menuActive = document.querySelector('.burger_menu');
const burger = document.querySelector('.img_burger__menu');
const menuClose = document.querySelector('.menu__close');

function toggleMenu() {
  menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
