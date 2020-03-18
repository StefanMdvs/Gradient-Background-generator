var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//getting the initial background color when the page loads first
var style = window.getComputedStyle(gradient);
var background = style.backgroundImage;

css.textContent = background;

//creating the button for random colors
var btn = document.createElement("button");
btn.appendChild(document.createTextNode("Random colors"));
body.appendChild(btn);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

function random(min, max) {
	return Math.floor(Math.random() * (255 - 0) + 0);
}

function randomColors() {
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ random() + ", " +  random() + ", " + random() + ")"
	+ ", " 
	+ "rgb(" + random() + ", " +  random() + ", " + random() + ")"
	+ ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomColors);