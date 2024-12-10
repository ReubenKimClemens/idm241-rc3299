document.querySelector(".arrow-left").addEventListener("click", carouselTabOne);

function carouselTabOne() {
    // const changeImg = document.querySelector("#slay-the-spire .item-cover img");
    document.querySelector("#first-item .item-cover img").src = "images/bloons-td-6-hero.jpg";
    document.querySelector("#second-item .item-cover img").src = "images/deadside-hero.jpg";
    document.querySelector("#third-item .item-cover img").src = "images/indiana-jones-hero.jpg";
}