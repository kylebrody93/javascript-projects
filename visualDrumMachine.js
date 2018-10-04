var posX, posY;
var fillRed, fillGreen, fillBlue;
var bgRed, bgGreen, bgBlue;
var kick;
var hihat;
var snare;
var ohat;

function preload() {
  kick = loadSound('sounds/kick.flac');
  hihat = loadSound('sounds/closedhat.wav')
  snare = loadSound('sounds/snare.wav')
  ohat = loadSound('sounds/openhat.wav')
}

function setup() {
  createCanvas(900, 600);
   //X and Y position for the player
  posY = 300;
  posX = 450;
  //fill color for the player
  fillRed = 0;
  fillGreen = 255;
  fillBlue = 0;
  //background color
  bgRed = 0;
  bgGreen = 0;
  bgBlue = 200;
}

function draw() {
  background(bgRed, bgGreen, bgBlue);
  drawPlayer();
  border();
}

//displays the player as a green square
function drawPlayer() {
  fill(fillRed, fillGreen, fillBlue);
  rect(posX, posY, 60, 60);
}

//controls player movement and color change
function keyPressed()
{

  if ( keyCode === UP_ARROW ) {
    posY = posY - 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    ohat.play();
  } 
  else if ( keyCode === DOWN_ARROW ) {
    posY = posY + 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    snare.play();
  }
  else if ( keyCode === RIGHT_ARROW ) {
    posX = posX + 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    hihat.play();
  }
  else if ( keyCode === LEFT_ARROW ){
    posX = posX - 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    bgRed = random(255);
    bgGreen = random(255);
    bgBlue = random(255);    
    kick.play();
  }
}

//keeps player from leaving the canvas
function border() {
  
  if ( posX > 880 ) {
    posX = 250;
    posY = 300;
  }

  else if ( posX < 0){
    posX = 250;
    posy = 300;
  }

  else if ( posY > 540) {
    posX = 250;
    posY = 300;
  }

  else if ( posY < 10) {
     posX = 250;
     posY = 300;
  }
}

