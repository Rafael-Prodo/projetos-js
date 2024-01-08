const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function isLampBroken () {
    return lamp.src.includes("quebrada");
}

function lampOn () {
    if (!isLampBroken ()) {
        lamp.src = "./img/ligada.jpg";
    }
}

function lampOff () {
    if (!isLampBroken ()) {
        lamp.src = "./img/desligada.jpg";
    }
}

function lampBroken () {
    lamp.src = "./img/quebrada.jpg";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("dblclick", lampBroken);