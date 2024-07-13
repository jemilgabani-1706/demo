$(document).ready(function () {
    $('.nav-items').click(function () {
        $('.nav-items').removeClass('active');
        $(this).addClass('active');
    })
})


let menuIcon = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}