function scrollBanner() {
    let scroll = window.scrollY;
    let sessaoText = document.querySelector('.sessao-parallax h1');

    if (sessaoText && scroll <= 1000) {
        sessaoText.style.transform = "translateY(" + (-scroll / 3) + "px)";
        sessaoText.style.opacity = 1 - (scroll / 1000);
    }
}
function animacaoHeader(){
    let header = document.querySelector("header");
    if (header) {
        header.style.transform = "translateY(0px)";
    }
}
document.addEventListener("DOMContentLoaded", animacaoHeader);
window.addEventListener('scroll', scrollBanner);

function animar(seletores, comRotacao = false) {
    document.querySelectorAll(seletores).forEach(el => {
        el.classList.add("visivel");
        if (!el.classList.contains("btn-cidade")) {
            el.style.transform = comRotacao ? "translateX(0px) rotate(180deg)" : "translateX(0px)";
        }
        el.style.opacity = "1";
    });
}
window.addEventListener("scroll", () => {
    const s = window.scrollY;

    if (s > 200) {
        animar(".imagem-historia, .titulo-historia, .paragrafo-historia");
    }
    if (s > 700){
        animar(".titulo-dicas, .paragrafo-dicas, .img-dicas");
    }
    if(s > 1500){
        animar(".texto-footer");
    }
});
