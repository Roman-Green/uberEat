let loginButton = document.querySelector(".login-button");
let popup = document.querySelector('.popup');
let popupCloth = document.querySelector('.popup__cloth');
let popup__submit = document.querySelector('.popup__submit');

loginButton.onclick = function() {
    popup.classList.remove('hidden');
}

popupCloth.onclick = function() {
    popup.classList.add('hidden');
}

popup__submit.onclick = function() {
    popup.classList.add('hidden');
}