var vh = window.innerHeight;
var vw = window.innerWidth;
const root = document.querySelector(':root');
var crabSize = Math.min(vh * 0.3, vw * 0.3);
var sunDiameter = Math.min(vh * 0.12, vw * 0.12);
// set css variable
root.style.setProperty('--crab-size', crabSize + "px");
root.style.setProperty('--sun-diameter', sunDiameter + "px");