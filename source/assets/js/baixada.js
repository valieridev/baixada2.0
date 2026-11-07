function scrollImg(){
    let imgScroll1 = document.querySelectorAll(".imgOnda1");
    let imgScroll2 = document.querySelectorAll(".imgOnda2");

    let imgMap = document.querySelector(".imgMap");
    let scroll = window.scrollY;

    if(scroll > 200){
        imgScroll1.forEach(img => {
            img.style.transform = "translateX(" + 0 + "px)";
            img.style.opacity = 1;
        });
        imgScroll2.forEach(img => {
            img.style.transform = "translateX(" + 0 + "px) rotate(180deg)";
            img.style.opacity = 1;
        })
        imgMap.style.transform = "translateX(" + 0 + "px)";
        imgMap.style.opacity = 1;
    }

}
console.log(window.scrollY);
function animaoBtns(){
    let buttons = document.querySelectorAll("a");
    let scroll = window.scrollY;
    if(scroll > 200){
        buttons.forEach(bt => {
            bt.style.transform = "translateX(" + 0 + "px)";
            bt.style.opacity = 1;
            
        });
        
    }  
}

window.addEventListener("scroll", () => {
    scrollImg();
    animaoBtns();
});
