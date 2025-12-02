var typed = new Typed('#element', {
    strings: ['a Web Developer.'],
    typeSpeed: 50,
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});