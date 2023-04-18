function setup() {
  createCanvas(400, 400);
  background(220);
}


function draw() {
  
  noStroke();  
  for(var i = 0; i < 200 ; i = i + 1){
    x1 = mouseX
    y1 = mouseY
    x2 = random(0,height)
    y2 = random(0,height)
    
    stroke(x1,y1,random(0,255),);
    line(x1,y1,x2,y2)
  }
}