var x = 60, y= 60;
var s = 100
var Dx= 1, Dy =1

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  x= x+ Dx
  y= y+ Dy
  
  fill(255,0,0,100)
  circle (x,y,50)
  fill(255,0,0,30)
  square (270,30,s)
  fill(0,0,255,50)
  triangle(30, 300, 58, 250, 86, 300);
  fill(0,255,0,100)
  ellipse(270, 250, 100, 50)
  
  

}