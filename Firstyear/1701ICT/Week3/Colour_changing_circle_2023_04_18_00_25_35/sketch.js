var x=0, Dx = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  x= x + Dx
  textSize(20)
  text("x: "+x,200,200)
  
  if(x > 200){
    fill(255,0,0)
  }
 if(x < 200){
   fill(0,0,255)
 }
  circle (x,200,100)
}