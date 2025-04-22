function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

var scrollToButton = document.getElementById("scrollTopButton");
var docElement = document.documentElement;

function scrolltoTop(){
    docElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function handleScroll(){
    var scrollTotal = docElement.scrollHeight - docElement.clientHeight;
    var count = docElement.scrollTop / scrollTotal
    if(count > 0.2){
        scrollToButton.classList.add("showBtn");
    } else {
        scrollToButton.classList.remove("showBtn");
    }
}

document.addEventListener("scroll", handleScroll)
scrollToButton.addEventListener("click", scrolltoTop);