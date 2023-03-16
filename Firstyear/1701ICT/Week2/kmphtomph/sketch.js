var kmph= 0;
var mph= 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  kmph= 100
  
  mph= kmph / 1.609
  
  text("Miles per Hour: " + mph,50,50)
  
 
  
}