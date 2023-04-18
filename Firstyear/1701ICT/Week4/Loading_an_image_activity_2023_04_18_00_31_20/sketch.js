var img, bg;
var x = 0,
  vx = 2;

function preload() {
  img = loadImage("images/kuromi.png");
  bg = loadImage("images/sky.jpg");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(190);
  image(bg, 0, 0, width, height);
  image(img, x, 100, 140, 170);
  x = x + vx;

  if (x > width) {
    vx = vx * -1;
  }
  if (x < 0) {
    vx = vx * -1;
  }
}
