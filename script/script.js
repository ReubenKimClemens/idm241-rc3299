let position = 1;


document.querySelector(".arrow-left").addEventListener("click", function() {
    carouselPosition("left");
});
document.querySelector(".arrow-right").addEventListener("click", function() {
    carouselPosition("right");
});

const carouselDivs = document.querySelectorAll(".carousel div");
let oldPos = carouselDivs[0];

carouselDivs[0].addEventListener("click", positionOne);
carouselDivs[1].addEventListener("click", positionTwo);
carouselDivs[2].addEventListener("click", positionThree);
carouselDivs[3].addEventListener("click", positionFour)

function carouselPosition(direction) {
    if (position == 1) {
        if (direction == "left") {
            position = 4;
        } else {
            position = 2;
        }
    } else if (position == 2) {
        if (direction == "left") {
            position = 1;
        } else {
            position = 3;
        }
    } else if (position == 3) {
        if (direction == "left") {
            position = 2;
        } else {
            position = 4;
        }
    } else if (position == 4) {
        if (direction == "left") {
            position = 3;
        } else {
            position = 1;
        }
    }
    if (position == 1) {
        positionOne()
    } else if (position == 2) {
        positionTwo()
    } else if (position == 3) {
        positionThree()
    } else if (position == 4) {
        positionFour()
    }
}

function positionOne() {
    // const changeImg = document.querySelector("#slay-the-spire .item-cover img");
    document.querySelector("#first-item .item-cover img").src = "images/slay-the-spire-hero.jpg";
    document.querySelector("#second-item .item-cover img").src = "images/generational-zero-hero.jpg";
    document.querySelector("#third-item .item-cover img").src = "images/the-long-dark-hero.jpg";
}

function positionTwo() {
    // const changeImg = document.querySelector("#slay-the-spire .item-cover img");
    document.querySelector("#first-item a").href = "https://store.steampowered.com/app/960090/Bloons_TD_6/";
    document.querySelector("#first-item .item-cover img").src = "images/bloons-td-6-hero.jpg";

    document.querySelector("#second-item a").href = "";
    document.querySelector("#second-item .item-cover img").src = "images/deadside-hero.jpg";
    
    document.querySelector("#third-item a").href = "";
    document.querySelector("#third-item .item-cover img").src = "images/indiana-jones-hero.jpg";
}

function positionThree() {
    // const changeImg = document.querySelector("#slay-the-spire .item-cover img");
    document.querySelector("#first-item a").href = "";
    document.querySelector("#first-item .item-cover img").src = "images/balatro-hero.jpg";

    document.querySelector("#second-item a").href = "";
    document.querySelector("#second-item .item-cover img").src = "images/dayz-hero.jpg";

    document.querySelector("#third-item a").href = "";
    document.querySelector("#third-item .item-cover img").src = "images/palworld-hero.jpg";
}

function positionFour() {
    // const changeImg = document.querySelector("#slay-the-spire .item-cover img");
    document.querySelector("#first-item a").href = "";
    document.querySelector("#first-item .item-cover img").src = "images/red-dead-redemption-hero.jpg";
    
    document.querySelector("#second-item a").href = "";
    document.querySelector("#second-item .item-cover img").src = "images/rust-hero.jpg";

    document.querySelector("#third-item a").href = "";
    document.querySelector("#third-item .item-cover img").src = "images/space-marine-hero.jpg";
}

function activeDiv(pos) {
    if (carouselDivs[pos] != oldPos) {
        oldPos.classList.remove("active");
        carouselDivs[pos].classList.add("active");
        oldPos = carouselDivs[pos];
    }
}