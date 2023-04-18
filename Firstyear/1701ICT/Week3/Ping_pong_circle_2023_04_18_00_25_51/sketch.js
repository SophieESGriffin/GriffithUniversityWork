var x = 0,
  y = 200;
var Dx = 5,
  Dy = 2;
function setup() {
  createCanvas(400, 400);
  frameRate(60)
}

function draw() {
  background(120);

  x = x + Dx;
  y = y + Dy;

  if (x >= width) {
    Dx = Dx * -1;
  }

  if (x <= 0) {
    Dx = Dx * -1;
  }
  if (y > height){
    Dy = Dy * -1;
  }
  if( y <0){
    Dy = Dy *-1
  }

  circle(x, y, 100);
  fill(255, 0, 100, 100);
}
