const LOADING = 0
const PLAY = 1
const GAMEOVER = 2
var currentScreen; 

function setup() {
  createCanvas(400, 400);
  currentScreen = LOADING
}

function draw() {
  background(220);
  if(currentScreen == LOADING){
    drawLoadingScreen()
  }
  if(currentScreen == PLAY){
    drawPlayScreen()
  }
  if(currentScreen == GAMEOVER){
    drawGameOverScreen();
  }
}
function drawLoadingScreen(){
  background(0,255,0)
  textSize(30)
  text('LOADING, please wait!', 0,200)
  if(mouseIsPressed || keyIsPressed){
    currentScreen = PLAY
  }
}
function drawPlayScreen(){
  background(0,0,255)
  textSize(30)
  circle(200,200,100)
  text('Score:', 100,200)
}
function drawGameOverScreen(){
  background(255,0,0)
  textSize(30)
  text('GAME OVER', 100,200)
}