//color variables
var red;
var green;
var blue;
//mouse contorl variables
var posX;
var posY;


function setup() {
  createCanvas(999, 500);
  background(185, 255, 255);

  red = 50;
  green = 150;
  blue = 200;
//brush starts off screen
  posX = -111;
  posY = 0;
}


function draw() {
	noStroke()
  fill(red, green, blue, 90);
	rect(posX, posY, 50, 50, 25);
  
  textSize(32);
	text('ALT = eraser. Ctrl = random color.', 0, 26);
  
}

function keyPressed(){
  if (keyCode === ALT){
    red = 185;
  	green = 255;
  	blue = 255;
  	posX = -111;
  	posY = 0;
  }
  else if (keyCode === CONTROL){
    red = random(255);
    green = random(255);
    blue = random(255);
    posX = -111;
  	posY = 0;
  }
}


function mouseClicked() {
  posX = mouseX;
  posY = mouseY;
}

function mouseDragged() {
  posX = mouseX;
  posY = mouseY;
}
