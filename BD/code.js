var vh = window.innerHeight;
var vw = window.innerWidth;
var root = document.querySelector(':root');
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
    
    var button = document.getElementById("blowout");
    var firstP = document.getElementById("firstP");
    var secondP = document.getElementById("secondP");
    var thirdP = document.getElementById("thirdP");
    
    firstP.removeChild(firstP.children[0]);
    secondP.removeChild(secondP.children[0]);
    thirdP.removeChild(thirdP.children[0]);
    
    firstP.innerHTML = "The audio is not necesseary";
    secondP.innerHTML = "Attention:";
    secondP.style.color = "#dd0000"
    thirdP.innerHTML = "( Headphones needed )";
    button.innerHTML = "Play Audio";
    button.setAttribute("onClick", "playAudio()");
    
}

function playAudio() {
    var congrats = document.getElementById("congrats");
    
    congrats.play();
}

function handleLoading() {
    document.body.style.display = "block";
}

window.onload = handleLoading();

