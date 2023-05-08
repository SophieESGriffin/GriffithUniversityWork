var x = [], y = [], vx = [], vy = [];
var N = 1000; 
function setup() {
  createCanvas(400, 400);
  background(220);
  randomize();
  
}

function draw() {
  for(var i = 0; i < N; i++){
    stroke(0,0,0,50);
    fill(x[i],y[i], mouseX,50);
    circle(x[i], y[i], 20);
  }
  move();
  bounce();
}
function randomize(){
   for(var i = 0;  i < N; i++){
    x[i] = random(0,width)
    y[i] = random(0,height)
    vx[i] = random(-2,2)
    vy[i] = random(-2,2)
  }
}
function move() {
  for (var i = 0;  i < N; i++){
    x[i] = x[i] + vx[i];
    y[i] = y[i] + vy[i];
  }
}
function bounce(){
    for(var i = 0; i < N; i++){
      if(x[i] > width || x)
    }
}