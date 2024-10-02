const burgerButton = document.getElementById('hamburger');
const navbar = document.getElementById('mobile-navbar');
const mobileClose = document.getElementById('mobile-close');

burgerButton.addEventListener('click', () => {
   navbar.style.left = '0';
});

mobileClose.addEventListener('click', () => {
    navbar.style.left = '-100%';
});