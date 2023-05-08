var player ={
  x : 0,
  y : 0,
  vx : 0,
  vy : 0
}
var enemy ={
  x : 0,
  y : 0,
  vx : 0,
  vy : 0
}
function setup() {
  createCanvas(400, 400);
  randomizeEnemy();
  randomizePlayer(); 
}

function draw() {
  background(220);
  drawEnemy();
  drawPlayer();
  movePlayer();
  moveEnemy();
  bounceEnemy();
}
function randomizeEnemy(){
  enemy.x = random(0,width)
  enemy.y = random(0,300)
  enemy.vx = +1
}
function drawEnemy(){
  circle(enemy.x, enemy.y, 50)
}
function randomizePlayer(){
  player.x = random(0,width)
  player.y = 350
}
function drawPlayer(){
  rect(player.x, player.y,100,5)
}
function movePlayer(){
  player.x = mouseX;
}
function moveEnemy(){
  enemy.x = enemy.x + enemy.vx
}
function bounceEnemy(){
    if(enemy.x > width || enemy.x < 0){
    enemy.vx = -enemy.vx;
  
  }
}