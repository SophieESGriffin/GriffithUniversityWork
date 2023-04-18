var x= 200, y=200

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
if(keyCode == 37){
  x = x - 1
}
if(keyCode == 39){
  x = x + 1
}
if(keyCode ==40){
  y = y + 1
  }
if(keyCode ==38){
  y = y - 1
}
if(keyCode ==32){
  fill(random(0,255), random(0,255), random(0,255,), 20)
}

  text(keyCode,200,200)
  circle(x,y,100)
}