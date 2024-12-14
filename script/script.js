let position = 1;


document.querySelector(".arrow-left").addEventListener("click", function() {
    carouselPosition("left");
});
document.querySelector(".arrow-right").addEventListener("click", function() {
    carouselPosition("right");
});

const carouselDivs = document.querySelectorAll(".carousel div");
let oldPos = carouselDivs[0];

carouselDivs[0].addEventListener("click", function() {
    activeDiv(0);
    positionOne();
});
carouselDivs[1].addEventListener("click", function() {
    activeDiv(1);
    positionTwo();
});
carouselDivs[2].addEventListener("click", function() {
    activeDiv(2);
    positionThree();
});
carouselDivs[3].addEventListener("click", function() {
    activeDiv(3);
    positionFour();
})

document.querySelector("#first-item .tags div").addEventListener("click", function() {
    tagName("#first-item");
});

document.querySelector("#second-item .tags div").addEventListener("click", function() {
    tagName("#second-item");
});

document.querySelector("#third-item .tags div").addEventListener("click", function() {
    tagName("#third-item");
});

function tagName(name) {
    if (document.querySelector(name.concat(" ",".tags div")).textContent == "Roguelike Deckbuilder"){
        document.querySelector("#second-item a").href = "https://store.steampowered.com/tags/en/Roguelike%20Deckbuilder/";
    } 
    else if (document.querySelector(name.concat(" ",".tags div")).textContent == "Open World"){
        document.querySelector(name.concat(" ","a")).href = "https://store.steampowered.com/category/exploration_open_world";
    }
    else if (document.querySelector(name.concat(" ",".tags div")).textContent == "Survival"){
        document.querySelector(name.concat(" ","a")).href = "https://store.steampowered.com/category/survival";
    }
    else if (document.querySelector(name.concat(" ",".tags div")).textContent == "Tower Defense"){
        document.querySelector(name.concat(" ","a")).href = "https://store.steampowered.com/category/tower_defense";
    }
    else if (document.querySelector(name.concat(" ",".tags div")).textContent == "Action-Adventure"){
        document.querySelector(name.concat(" ","a")).href = "https://store.steampowered.com/tags/en/Action-Adventure";
    }
    else if (document.querySelector(name.concat(" ",".tags div")).textContent == "Action"){
        document.querySelector(name.concat(" ","a")).href = "https://store.steampowered.com/category/action";
    }
}

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
        activeDiv(0);
    } else if (position == 2) {
        positionTwo()
        activeDiv(1);
    } else if (position == 3) {
        positionThree()
        activeDiv(2);
    } else if (position == 4) {
        positionFour()
        activeDiv(3);
    }
}

function positionOne() {
    document.querySelector("#first-item a").href = "https://store.steampowered.com/app/646570/Slay_the_Spire/";
    document.querySelector("#first-item .item-cover img").src = "images/slay-the-spire-hero.jpg";
    document.querySelector("#first-item .item-info h2").textContent = "Slay the Spire";
    document.querySelector("#first-item .item-info p").textContent = "We fused card games and roguelikes together to make the best single player deckbuilder we could. Craft a unique deck, encounter bizarre creatures, discover relics of immense power, and Slay the Spire!";
    document.querySelector("#first-item .tags div").textContent = "Roguelike Deckbuilder";

    document.querySelector("#second-item a").href = "https://store.steampowered.com/app/704270/Generation_Zero/";
    document.querySelector("#second-item .item-cover img").src = "images/generational-zero-hero.jpg";
    document.querySelector("#second-item .item-info h2").textContent = "Generation Zero";
    document.querySelector("#second-item .item-info p").textContent = "Generation Zero is a stealth-action shooter where you wage guerilla warfare against lethal mechanical enemies. Explore a vast open world map inspired by the Swedish Cold War era, take part in the resistance alone or with up to three friends in seamless co-op.";
    document.querySelector("#second-item .tags div").textContent = "Open World";

    document.querySelector("#third-item a").href = "https://store.steampowered.com/app/305620/The_Long_Dark/";
    document.querySelector("#third-item .item-cover img").src = "images/the-long-dark-hero.jpg";
    document.querySelector("#third-item .item-info h2").textContent = "The Long Dark";
    document.querySelector("#third-item .item-info p").textContent = "THE LONG DARK is a thoughtful, exploration-survival experience that challenges solo players to think for themselves as they explore an expansive frozen wilderness in the aftermath of a geomagnetic disaster. There are no zombies -- only you, the cold, and all the threats Mother Nature can muster.";
    document.querySelector("#third-item .tags div").textContent = "Survival";
}

function positionTwo() {
    document.querySelector("#first-item a").href = "https://store.steampowered.com/app/960090/Bloons_TD_6/";
    document.querySelector("#first-item .item-cover img").src = "images/bloons-td-6-hero.jpg";
    document.querySelector("#first-item .item-info h2").textContent = "Bloons TD 6";
    document.querySelector("#first-item .item-info p").textContent = "The Bloons are back and better than ever! Get ready for a massive 3D tower defense game designed to give you hours and hours of the best strategy gaming available.";
    document.querySelector("#first-item .tags div").textContent = "Tower Defense";

    document.querySelector("#second-item a").href = "https://store.steampowered.com/app/895400/Deadside/";
    document.querySelector("#second-item .item-cover img").src = "images/deadside-hero.jpg";
    document.querySelector("#second-item .item-info h2").textContent = "Deadside";
    document.querySelector("#second-item .item-info p").textContent = "An Open World Survival Shooter blending hardcore PVP and PVE action. Secure precious loot in safe zones or build your own fortress in the wild. With intense gunfights, stunning visuals, and performance smooth enough for any system, the challenge awaits!";
    document.querySelector("#second-item .tags div").textContent = "Survival";
    
    document.querySelector("#third-item a").href = "https://store.steampowered.com/app/2677660/Indiana_Jones_and_the_Great_Circle/";
    document.querySelector("#third-item .item-cover img").src = "images/indiana-jones-hero.jpg";
    document.querySelector("#third-item .item-info h2").textContent = "Indiana Jones";
    document.querySelector("#third-item .item-info p").textContent = "Uncover one of history’s greatest mysteries in a first-person, single-player adventure. The year is 1937, sinister forces are scouring the globe for the secret to an ancient power connected to the Great Circle, and only one person can stop them - Indiana Jones™.";
    document.querySelector("#third-item .tags div").textContent = "Action-Adventure";
}

function positionThree() {
    document.querySelector("#first-item a").href = "https://store.steampowered.com/app/2379780/Balatro/";
    document.querySelector("#first-item .item-cover img").src = "images/balatro-hero.jpg";
    document.querySelector("#first-item .item-info h2").textContent = "Balatro";
    document.querySelector("#first-item .item-info p").textContent = "The poker roguelike. Balatro is a hypnotically satisfying deckbuilder where you play illegal poker hands, discover game-changing jokers, and trigger adrenaline-pumping, outrageous combos.";
    document.querySelector("#first-item .tags div").textContent = "Roguelike Deckbuilder";

    document.querySelector("#second-item a").href = "https://store.steampowered.com/app/221100/DayZ/";
    document.querySelector("#second-item .item-cover img").src = "images/dayz-hero.jpg";
    document.querySelector("#second-item .item-info h2").textContent = "DayZ";
    document.querySelector("#second-item .item-info p").textContent = "How long can you survive a post-apocalyptic world? A land overrun with an infected 'zombie' population, where you compete with other survivors for limited resources. Will you team up with strangers and stay strong together? Or play as a lone wolf to avoid betrayal? This is DayZ – this is your story.";
    document.querySelector("#second-item .tags div").textContent = "Survival";

    document.querySelector("#third-item a").href = "https://store.steampowered.com/app/1623730/Palworld/";
    document.querySelector("#third-item .item-cover img").src = "images/palworld-hero.jpg";
    document.querySelector("#third-item .item-info h2").textContent = "Palworld";
    document.querySelector("#third-item .item-info p").textContent = "Fight, farm, build and work alongside mysterious creatures called 'Pals' in this completely new multiplayer, open world survival and crafting game!";
    document.querySelector("#third-item .tags div").textContent = "Open World";
}

function positionFour() {
    document.querySelector("#first-item a").href = "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/";
    document.querySelector("#first-item .item-cover img").src = "images/red-dead-redemption-hero.jpg";
    document.querySelector("#first-item .item-info h2").textContent = "Red Dead Redemption 2";
    document.querySelector("#first-item .item-info p").textContent = "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.";
    document.querySelector("#first-item .tags div").textContent = "Open World";
    
    document.querySelector("#second-item a").href = "https://store.steampowered.com/app/252490/Rust/";
    document.querySelector("#second-item .item-cover img").src = "images/rust-hero.jpg";
    document.querySelector("#second-item .item-info h2").textContent = "Rust";
    document.querySelector("#second-item .item-info p").textContent = "The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife, other inhabitants, the environment, and other survivors. Do whatever it takes to last another night.";
    document.querySelector("#second-item .tags div").textContent = "Survival";

    document.querySelector("#third-item a").href = "https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/";
    document.querySelector("#third-item .item-cover img").src = "images/space-marine-hero.jpg";
    document.querySelector("#third-item .item-info h2").textContent = "Space Marine 2";
    document.querySelector("#third-item .item-info p").textContent = "Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.";
    document.querySelector("#third-item .tags div").textContent = "Action";
}

function activeDiv(pos) {
    if (carouselDivs[pos] != oldPos) {
        oldPos.classList.remove("active");
        carouselDivs[pos].classList.add("active");
        oldPos = carouselDivs[pos];
    }
}

window.addEventListener("resize", function() {

    if (window.innerWidth <= 1300) {
        document.querySelector(".arrow-left").style.display = "none";
        document.querySelector(".arrow-right").style.display = "none";
        document.querySelector(".carousel").style.display = "none";
    } else {
        document.querySelector(".arrow-left").style.display = "block";
        document.querySelector(".arrow-right").style.display = "block";
        document.querySelector(".carousel").style.display = "flex";
    }

});