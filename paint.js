//color variables
var red;
var green;
var blue;
//mouse contorl variables
var posX;
var posY;
//brush size variables
var sizeW;
var sizeH;

function setup() {
  createCanvas(999, 500);
  background(185, 255, 255);

  red = 50;
  green = 150;
  blue = 200;
//brush starts off screen
  posX = -11;
  posY = 0;
//starting cursor size
  sizeW = 10;
  sizeH = 10;
}


function draw() {

  fill(red, green, blue, 90);

  rect(posX, posY, sizeW, sizeH, 25);

}

function keyPressed() {
  //user picks between 2 brush sizes and between random rgb colors
  if (keyCode === ALT) {
    sizeW = 20;
    sizeH = 20;
  } else if (keyCode === CONTROL) {
    sizeW = 10;
    sizeH = 10;
  } 
   	else {
    red = random(255);
    green = random(255);
    blue = random(255);
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
