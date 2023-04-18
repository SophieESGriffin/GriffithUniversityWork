var x = 0,
  y = 200;
var Dx = 5,
  Dy = 2;
function setup() {
  createCanvas(400, 400);
  frameRate(100);
    background(120);
}

function draw() {


  x = x + Dx;
  y = y + Dy;

  if (x >= width) {
    Dx = Dx * -1;
  }

  if (x <= 0) {
    Dx = Dx * -1;
  }
  if (y > height) {
    Dy = Dy * -1;
  }
  if (y < 0) {
    Dy = Dy * -1;
  }
  
  noStroke();
  fill(x,y,0,20)
  circle(x,y,20)

  noStroke();
  fill(x,y,0,20)
  circle(y,x,20)
}
