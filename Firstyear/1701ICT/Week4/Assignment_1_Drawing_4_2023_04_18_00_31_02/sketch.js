var angle = 0
function setup(){
  createCanvas(400,400)
}

function draw() {
  background(100);
  
  angle = angle + 0.01
  translate(200,200)
  rotate(angle)
  
  fill(255,255,255)
  circle(0,0,150)
  fill(0)
  arc(0, 0, 150, 150, 0, PI)
  fill(255,255,255)
  arc(37.8,-1,75,75,0,PI)
  fill(0)
  circle(40,0,20,)
  fill(0)
  circle(-37.8,0,75,)
  fill(255,255,255)
  circle(-40,0,20)



 

}