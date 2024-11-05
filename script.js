const menuWindow = document.querySelector(".menu-window");
const menuButton = document.querySelector(".header__menu-button");

menuButton.addEventListener('click', () => {
    console.log("Clicked!")
    menuWindow.classList.toggle('menu-window__active');
});