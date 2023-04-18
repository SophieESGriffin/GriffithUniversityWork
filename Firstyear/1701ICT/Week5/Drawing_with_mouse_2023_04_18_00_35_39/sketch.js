function setup() {
  createCanvas(400, 400);
   background(220);
}

function draw() {
 
  noStroke();
  if(mouseIsPressed == true){
    fill(mouseX, mouseY, 0, 50)
  }
  if(mouseIsPressed == false){
    fill(220,220,220,100)
  }
 if(key == 'a'){ 
   circle(mouseX, mouseY, 40)
 }
if(key == 'b'){
  rect(mouseX, mouseY, 50)
}
  
 
}