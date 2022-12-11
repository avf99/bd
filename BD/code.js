var vh = window.innerHeight;
var vw = window.innerWidth;
const root = document.querySelector(':root');
var crabSize = Math.min(vh * 0.3, vw * 0.3);
var sunDiameter = Math.min(vh * 0.12, vw * 0.12);
// set css variable

function getChromeVersion () {     
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

    return raw ? parseInt(raw[2], 10) : false;
}

if(getChromeVersion() <= 70) {
    root.style.setProperty('--crab-size', crabSize + "px");
    root.style.setProperty('--sun-diameter', sunDiameter + "px");
}

function blowOut() {
    var smokes = document.getElementsByClassName("smoke");
    var flame = document.getElementsByClassName("flame");
    
    for (let i = 0; i < flame.length; i++) {
        flame[i].style.opacity = 0;
    }
    
    for (let i = 0; i < smokes.length; i++) {
        smokes[i].style.animation = "flame-off 3s linear forwards";
        smokes[i].style.animationDelay = i%5 * 0.5 + "s";
    }
}



