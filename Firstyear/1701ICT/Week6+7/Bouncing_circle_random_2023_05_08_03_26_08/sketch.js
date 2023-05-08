var x, y, vx, vy

function setup() {
  createCanvas(400, 400);
  randomize();
}

function draw() {
  background(220);
  
  youMove();
  drawShape();
  bounce();
  
}
function randomize(){
  x = random(0,width);
  y = random(0,width);
  vx = random(-2,2);
  vy = random(-2,2);
}
function youMove(){
  x = x + vx;
  y = y + vy;
}
function drawShape(){
  fill(random(0,255))
  circle(x,y,50)
}
function bounce(){
  if(x > width || x < 0){
    vx = vx * -1
  if(y > height || y < 0){
    vy = vy * -1
  }
  }
}