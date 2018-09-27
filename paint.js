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
  background(50, 150, 200,);
  
  red = 255;
  green = 0;
  blue = 0;
  
  posX = 1;
  posY = 1;
  
  sizeW = 10;
  sizeH = 10;
}


function draw() {
 
  fill(red, green, blue, 90);

  
  rect(posX, posY, sizeW, sizeH, 25);
  
}

function keyPressed() {
  //user picks between 2 brush sizes and between random rgb colors
  if (keyCode === ALT){
    sizeW = 20;
    sizeH = 20;
  }
  else if (keyCode === CONTROL){
    sizeW = 10;
    sizeH = 10;
  }
  else{
    red = random(255);
    green = random(255);
    blue = random(255);
  }

}

function mouseClicked(){
  posX = mouseX;
  posY = mouseY;
}

function mouseDragged(){
  posX = mouseX;
  posY = mouseY;
}
