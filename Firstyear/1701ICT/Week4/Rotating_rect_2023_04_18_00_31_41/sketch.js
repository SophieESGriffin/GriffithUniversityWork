var angle = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


angle = angle + 0.01

translate(200,200)
rotate(angle)

rect(0,0,100,100)
fill(20,202,20)
}