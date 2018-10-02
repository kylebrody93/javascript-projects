var computerX;
var computerY;

var playerX;
var playerY;

function setup() {
  createCanvas(800, 300);
  computerX = 10;
  computerY = 20;
  playerX = 10;
  playerY = 90;
}

function draw() {
  background(200,20);
  //computer. green racer.
  fill(0, 255, 0);
  rect(computerX, computerY, 50, 50);
  
  //player. blue racer.
  fill(0, 0, 255);
  rect(playerX, playerY, 50, 50);
  
  //finish line
  fill(255, 0, 0)
  rect(700, 10, 1, 250);
  
  textSize(32);
	text('You are the BLUE racer. click to start.', 10, 220);
  
  textSize(32);
	text('RIGHT ARROW to move forward.', 10, 260);
  
  //computer will race until 10px after the finish line.
  if (computerX < 710) {
	  computerX = computerX + 1;
	  }
  
  if (playerX > 700 && playerX > computerX) {
    textSize(32);
		text('YOU WIN!!!!', 10, 30);
  } 
  else if (computerX > 700 && playerX < 700) {
    textSize(32);
		text('You LOSE.', 10, 30);
    //this keeps player from crossing finish line
    while (playerX > -43)
    playerX = playerX - 20;
  }
}

function mouseClicked(){
  computerX = 10;
  playerX = 10;
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    playerX = playerX + 10;
  }
}

