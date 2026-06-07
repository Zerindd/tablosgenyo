let nevek = ["", "", "kepek/apple.png",
    "kepek/banana.png", "kepek/cherry.png",
    "kepek/dragonfruit.png", "kepek/orange.png", "kepek/pear.png"];

let elsokep = document.getElementById("egyk");
let masodikkep = document.getElementById("kettok");
let oldalkoveto = 0;
let elsoft = document.querySelector("#elsoft");
let masodikft = document.querySelector("#masodikft");
let limit = (nevek.length) - 2;
let hatrag = document.getElementById("gombbal")
let eloreg = document.getElementById("gombjobb")

function lapszam() {
    elsoft.innerHTML = oldalkoveto - 1
    masodikft.innerHTML = oldalkoveto
    elsokep.src = nevek[oldalkoveto]
    masodikkep.src = nevek[oldalkoveto + 1]
    if (oldalkoveto == limit) {
        eloreg.style.display = "none";
    }
    else {
        eloreg.style.display = "block"
    }
    if (oldalkoveto == 2) {
        hatrag.style.display = "none";
    }
    else {
        hatrag.style.display = "block";
    }
}
function lap1() {
    let ezalap = document.getElementById("container");
    let kovilap = document.getElementById("container1");
    ezalap.style.display = "none";
    kovilap.style.display = "block";
    eloreg.style.display = "block";
    oldalkoveto += 2
    lapszam();

}
function lape() {
    oldalkoveto += 2;
    lapszam();

}
function laph() {
    oldalkoveto -= 2;
    lapszam();
}
