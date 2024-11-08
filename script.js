const openButton = document.querySelector(".menu__button");
const menu = document.querySelector(".menu");
const grayBackground = document.querySelector(".gray-background");

openButton.addEventListener("click", () => {
    console.log("Clicked!")
    menu.classList.toggle("menu__active");
    grayBackground.classList.toggle("gray-background__active")
    if (menu.className == "menu menu__active") {
        openButton.src = "images/close.png"
    }
    else {
        openButton.src = "images/Group 7.png"
    }
})