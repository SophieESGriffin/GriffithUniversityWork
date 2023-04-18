var x= 200, y= 200;
var Dx=0, Dy= 0
var diameter = 0

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  frameRate(20);
 
}

function draw() {
   background(100)
  x= x + Dy
  y= y + Dy
  circle(x,y,diameter)
  diameter = diameter + 1

}