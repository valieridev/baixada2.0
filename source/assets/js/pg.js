function animar(seletores) {
    document.querySelectorAll(seletores).forEach(el => {
        el.style.transform = "translateX(0px)";
        el.style.opacity = "1";
    });
}
window.addEventListener("scroll", () => {
    const s = window.scrollY;

    if (s > 200) {
        animar(".img-ponte-pensil, .titulo-historia, .paragrafo-historia, .texto-footer");
    }
});