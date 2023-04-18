var x,
  y,
  R = 30,
  ANGLE = 0;
var x2,
  y2,
  R2 = 45;
  ANGLE2 = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20,100,10);
  
  stroke(0)
  fill(100)
  ellipse(200,200,145,100)
  fill(20,100,10)
  ellipse(200,200,55,40)
  fill(255,255,0)
  
  stroke(255,255,0)
  noFill()
  ellipse(200,200,100,60)
  
  
    ANGLE = ANGLE + 0.02
  y = 200 + R * cos(ANGLE);
  x = 200 + 2 * R * sin(ANGLE);
  
  stroke(0)
  fill(255, 0, 0);
  circle(x, y, 10);
  
   ANGLE2 = ANGLE2 - 0.01;
  x2 = 200 + R2 * cos(ANGLE2);
  y2 = 200 + R2 * sin(ANGLE2);

  fill(10,10,100);
  circle(x2, y2, 10);
  
 
  
  
}