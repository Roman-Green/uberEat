let burgerMenu = document.querySelector(".burger-menu");
let adaptiveMenu = document.querySelector(".header-menu-navigation_adaptive");

burgerMenu.onclick = function() {
    adaptiveMenu.classList.toggle("hiden");
}