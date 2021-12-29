let hamBtn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".dropdown");
// let arrow = document.querySelector(".arrow");
hamBtn.addEventListener("click", showMenu);

function showMenu() {
    if (menu.style.display == "block") {
        menu.style = "display: none";
        // arrow.style = "display: hidden";
    } else {
        menu.style = "display: block";
        // arrow.style = "display: block";
    }
}