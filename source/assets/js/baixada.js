function animar(seletores, comRotacao = false) {
    document.querySelectorAll(seletores).forEach(el => {
        el.style.transform = comRotacao ? "translateX(0px) rotate(180deg)" : "translateX(0px)";
        el.style.opacity = "1";
        el.classList.add("visivel"); 
    });
}
window.addEventListener("scroll", () => {
    const s = window.scrollY;

    if (s > 200) {
        animar(".img-onda-regiao, .img-mapa-baixada, .titulo-regiao, .paragrafo-regiao");
    }
    if (s > 850) {
        animar(".btn-cidade, .img-onda-cidade2, .titulo-cidades, .subtitulo-cidades");
        animar(".img-onda-cidade1", true);
    }
    if (s > 1600) {
        animar(".img-onda-transporte2, .img-serra, .titulo-transporte, .paragrafo-transporte");
        animar(".img-onda-transporte1", true);
    }
    if (s > 2200) {
        animar(".texto-footer");
    }
});