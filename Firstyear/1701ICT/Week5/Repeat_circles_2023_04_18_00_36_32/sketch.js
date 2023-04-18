function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  background(220);
  for(var x= 0; x < width; x = x+30){
    for(var y=0; y< height; y = y + 30){
      fill(x,random(0,255), random(0,255),40)
      circle(x,y,40)
    }
  }
}