const RED = 1
const AMBER = 2
const GREEN = 3
var status = RED;

function setup() {
  createCanvas(400, 400);
  frameRate(60)
}

function draw() {
  background(220);
  if(frameCount % 120 == 0){
    status++
  if(status > 3){
    status = RED
    }
  }
  fill(0);
  text(status,50,50)
  rect(100,100,100,200,10)
  if(status == RED){
    fill(255,0,0)
  }
  else{
    fill(255)
  }
  circle(150,150,50);
  if(status == AMBER){
    fill(255,125,0);
  }
  else{
    fill(255)
  }
  circle(150,200,50)
  if(status == GREEN){
    fill(150,200,50)
  }
  else{
    fill(255)
  }
  circle(150,250,50);
  
}