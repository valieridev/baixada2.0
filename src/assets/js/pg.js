window.addEventListener("scroll", () => {
    const s = window.scrollY;

    if (s > 200) {
        animar(".img-ponte-pensil, .titulo-historia, .paragrafo-historia");
    }
    if (s > 1300){
        animar(".titulo-dicas, .paragrafo-dicas, .img-dicas");
    }
    if(s > 2100){
        animar(".texto-footer");
    }
});