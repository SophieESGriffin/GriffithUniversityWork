function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(100,0,150,50)
  for(var x = 0; x < 400; x = x + 40){
    circle(x,200,50)
  }
}