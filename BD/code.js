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
    let rightCandle = document.getElementById("rightCandle");
    let leftCandle = document.getElementById("leftCandle");
    for (let i = 0; i < 50; i++) {
        smokeRight = document.createElement("div");
        rightCandle.appendChild(smokeRight);
        smokeRight.className = "smoke-right smoke"
        
        smokeLeft = document.createElement("div");
        leftCandle.appendChild(smokeLeft);
        smokeLeft.className = "smoke-left smoke"
    }
    
    var smokesLeft = document.getElementsByClassName("smoke-left");
    var smokesRight = document.getElementsByClassName("smoke-right");
    var flame = document.getElementsByClassName("flame");
    
    for (let i = 0; i < flame.length; i++) {
        flame[i].style.opacity = 0;
    }
    
    if (smokesLeft.length == 50) {
        for (let i = 0; i < smokesLeft.length; i++) {
            smokesLeft[i].style.animation = "flame-off-left 3s linear forwards";
            smokesLeft[i].style.animationDelay = i%50 * 0.2 + "s";
        }
    
        for (let i = 0; i < smokesRight.length; i++) {
            smokesRight[i].style.animation = "flame-off-right 3s linear forwards";
            smokesRight[i].style.animationDelay = i%50 * 0.2 + "s";
        }
    }
    
    var button = document.getElementById("blowout");
    var firstP = document.getElementById("firstP");
    var secondP = document.getElementById("secondP");
    var thirdP = document.getElementById("thirdP");
    
    firstP.innerHTML = "The audio is not necessary";
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
