window.addEventListener("scroll", () => {
    const s = window.scrollY;

    if (s > 200) {
        animar(".img-mongagua-indigena, .titulo-historia, .paragrafo-historia");
    }
    if (s > 1100){
        animar(".titulo-dicas, .paragrafo-dicas, .img-dicas");
    }
    if(s > 1750){
        animar(".texto-footer");
    }
});