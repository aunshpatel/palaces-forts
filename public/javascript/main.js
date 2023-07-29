function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", toggleHamburger);