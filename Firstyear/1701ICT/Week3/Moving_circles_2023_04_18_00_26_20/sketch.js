var x,
  y,
  R = 100,
  ANGLE = 0;
var x2,
  y2,
  R2 = 150,
  ANGLE2 = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(190, 50, 0);
  circle(200, 200, 100);

  ANGLE = ANGLE + 0.01;
  x = 200 + R * cos(ANGLE);
  y = 200 + 2 * R * sin(ANGLE);
  
  fill(255, 0, 0);
  circle(x, y, 30);

  ANGLE2 = ANGLE2 - 0.01;
  x2 = 200 + R2 * cos(ANGLE2);
  y2 = 200 + R2 * sin(ANGLE2);

  fill(x2, y2, 0);
  circle(x2, y2, 60);
}
