var myDataset;

function preload(){
  myDataset = loadJSON('au.json')
}
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  for(var i = 0; i < 15; i++ ){
    fill(mouseX, random(0,255), mouseY)
    text(myDataset[i].city, random(0,width), random(0,height))
  }
  fill(0,0,0,100)
  circle(mouseX,mouseY,100)
}