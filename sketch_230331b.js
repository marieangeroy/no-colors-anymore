// Marie-Ange Roy
// Pascal Huynh
// 502-A22 - LA - Web and Fx: from theory to practice
//  tittle; no colors anymore
// https://openprocessing.org/sketch/1863475



// the little circle is a young adult that still have all of his beautiful colors. 
// But once you click on him, he starts to loose all of his beauty until he became all black and goes directly in the black rectangle. 
// the rectangle is in fact, the society.
// my game is to show how sometimes people tend to tell us what we should be 
// by clicking on the circle it does the same effect as if someone wanted to push you into something you don't want to be
// but by doing that, it can erase all of our beauty and our dreams that we have.
// and in this case, it was the colors of the circle.
// in the end the circle just disappear in the middle of our society.
// but he had a lot more to offer to the world.




let a;
let b;
let speedB;
let speedA;
let noir;
let gameState;
let gameOver=false;
let baboune;


//image for game over
function preload(){
baboune=loadImage ('images.png');  
}
  


// speed of my circle
function setup() {
  createCanvas(1000, 1000);
  a = 0;
  b = 0;
  noir = 0;
  speedB = 2;
  speedA = 4;
  gameState = "menu"; // set the initial game state to "menu"
  gameOver=false;
}


//main menu
function draw() {
  if (gameState === "menu") { // if the game state is "menu", display the menu screen
    displayMenu();
  } else if (gameState === "game") { // if the game state is "game", display the game screen
    displayGame();
  if (gameState === "menu") {
    // display menu screen
  } else if (gameState === "game") {
    // display game screen
    if (gameOver) {
      
      
      
      //game over screen
      background(255);
      textAlign(CENTER);
      textSize(50);
      fill(0);
      text("Game Over!", width / 2, height / 14);
      
      textSize(30);
      fill(0);
      text("you push the little circle too much.", width / 2, height / 7);
    
       textSize(30);
      fill(0);
      text("it was full of light and you pushed him into the perseption of the society.", width / 2, height / 6);
      
      textSize(30);
      fill(0);
      text("you decided what you wanted him to be and not let him be", width / 2, height / 5);
    
      
       textSize(30);
      fill(0);
      text("you put him in a monochrome world which is society.", width / 2, height /4);
      
      textSize(25);
      fill(0);
      text("he does not belong with all the other colorful circles anymore that chose their own paths", width / 2, height / 3);
      
      image(baboune,360,370,200)
      
      
    }
  }
}

  
}


//main menu screen
function displayMenu() {
  background(183, 181, 82);
  textAlign(CENTER);
  textSize(50);
  fill(0);
  text("for this game you will need to click ", width / 2, height / 4);
  
  textSize(40);
  fill(0);
  text(" with your mouse on the circle that seem to be lost", width / 2, height / 3);

  textSize(30);
  fill(82, 135, 183);
  text("Press SPACE to start", width / 2, height / 2);
}


// others that chose their own path
function displayGame() {
  background(233, 162, 211);
  fill(190, 231, 157);
  circle(90, 70, 110);
  fill(134, 231, 222);
  circle(70, 700, 100);
  fill(237, 228, 134);
  circle(730, 900, 120);
  fill(224, 73, 73);
  circle(900, 60, 88);
  fill(73, 73, 224);
  circle(860, 610, 90);
  fill(237, 116, 15);
  circle(439, 200, 59);
  fill(183, 110, 249);
  circle(300, 900, 90);

  
  //society
  fill(0);
  rectMode(CENTER);
  rect(500, 500, 500, 500);

  
  
  // little kid (colorful circle)
  a = a + speedA;
  b = b + speedB;
  fill(random(255) + noir, random(255) + noir, random(255) + noir);
  circle(a, b, 100);
  if (b > 1000 || b < 0) {
    speedB = speedB * -1;
  }
  if (a > 1000 || a < 0) {
    speedA = speedA * -1;
  }

  if (noir < -255 && a > 300 && a < 700) {
    speedA = 0;
  }
  if (noir < -255 && b > 300 && b < 700) {
    speedB = 0;
    {gameOver=true; 
    }
  }
}



// main menu
function keyPressed() {
  if (keyCode === 32 && gameState === "menu") { // if the space key is pressed and the game state is "menu", start the game
    gameState = "game";
  }
}

function mouseClicked() {
  if (gameState === "game") { // only allow the circle to turn black if the game state is "game"
    if (mouseX < a + 50 && mouseX > a - 50 && mouseY < b + 50 && mouseY > b - 50) {
      noir = noir - 10;
    }
  }
}
