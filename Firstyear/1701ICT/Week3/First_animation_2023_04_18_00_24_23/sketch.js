var x= 200, y= 200;
var Dx=1, Dy= 1

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);
  frameRate(20);
 
}

function draw() {
   background(100)
  x= x + Dy
  y= y + Dy
  circle(x,y,100)

}