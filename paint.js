var red;
var green;
var blue;

var posX;
var posY;

function setup() {
createCanvas(999, 500);
background(50, 150, 200,);
  
  red = 255;
  green = 0;
  blue = 0;
  
  posX = 1;
  posY = 1;
}


function draw() {
 
  fill(red, green, blue, 90);

  
  rect(posX, posY, 10, 10, 25);
  
}

function keyPressed() {
  if (red === 255) {
    red = 0;
    green = 255;
    blue = 0;
  } else if (green === 255){
    red = 0;
    green = 0;
    blue = 255;
  }
  	else if (blue === 255){
    red = 255;
    green = 0;
    blue = 0;
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
