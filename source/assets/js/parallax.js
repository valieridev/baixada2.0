
function scrollBanner() {
    let scroll = window.scrollY;
    let sessaoText = document.querySelector('.sessao-parallax h1');

    if (scroll <= 1000) {
            sessaoText.style.transform = "translateY(" + (-scroll / 3) + "px)";
            sessaoText.style.opacity = 1 - (scroll / 1000);
    }
}

function scrollText() {
    let scroll = window.scrollY;
    let h2 = document.querySelectorAll("h2");
    let paragrafos = document.querySelectorAll("p"); // Mudado o nome da variável para clareza

    if (scroll > 200) {
        h2.forEach(h2 =>{
            h2.style.transform = "translateX(0px)";
            h2.style.opacity = 1;
        })

        paragrafos.forEach(p => {
            p.style.transform = "translateX(0px)";
            p.style.opacity = 1;
        });
    }
}
function animacaHeader(){
    let header = document.querySelector("header");

    header.style.transform = "translateY(0px)";
}
document.addEventListener("DOMContentLoaded", animacaHeader);

window.addEventListener('scroll', () => {
    scrollBanner();
    scrollText();
});