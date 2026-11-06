function scrollImg(){
    let imgScroll = document.querySelector(".imgOnda");
    let imgMap = document.querySelector(".imgMap");
    let scroll = window.scrollY;

    if(scroll > 200){
        imgScroll.style.transform = "translateX(" + 0 + "px)";
        imgScroll.style.opacity = 1
        imgMap.style.transform = "translateX(" + 0 + "px)";
        imgMap.style.opacity = 1
    }

}
window.addEventListener("scroll", scrollImg);
