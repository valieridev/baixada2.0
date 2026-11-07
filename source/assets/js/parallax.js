function scrollBanner() {
    let scroll = window.scrollY;
    let sessaoText = document.querySelector('.sessao-parallax h1');

    if (scroll <= 1000) {
            sessaoText.style.transform = "translateY(" + (-scroll / 3) + "px)";
            sessaoText.style.opacity = 1 - (scroll / 1000);
    }
}
function animacaHeader(){
    let header = document.querySelector("header");

    header.style.transform = "translateY(0px)";
}

document.addEventListener("DOMContentLoaded", animacaHeader);
window.addEventListener('scroll', scrollBanner);
