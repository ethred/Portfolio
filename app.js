const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.mobile-menu-contaner .close-icon');
const mobileMenuCont = document.querySelector('.mobile-menu-contaner');
const mainbar = document.querySelector('.main-bar');
const linksa = document.querySelector('.mobile-menu-contaner ul ');

menuIcon.addEventListener('click', () => {
  mobileMenuCont.classList.add('active');
  mainbar.classList.add('active');
});
closeIcon.addEventListener('click', () => {
  mobileMenuCont.classList.remove('active');
  mainbar.classList.remove('active');
});
/* add event for the links */ 
linksa.addEventListener('click', () => {
  mobileMenuCont.classList.remove('active');
  mainbar.classList.remove('active');
});
