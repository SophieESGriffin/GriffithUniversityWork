var player = {
  x: 0,
  y: 0,

  random: function () {
    player.x = random(0, width);
    player.y = 350;
  },
  draw: function () {
    rect(player.x, player.y, 100, 5);
  },
  move: function () {
    player.x = mouseX;
  },
};

var enemy = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  color: "red",

  random: function () {
    enemy.x = random(0, width);
    enemy.y = random(0, 300);
    enemy.vx = +1;
  },
  draw: function () {
    fill(enemy.color);
    circle(enemy.x, enemy.y, 50);
  },
  bounce: function () {
    if (enemy.x > width || enemy.x < 0) {
      enemy.vx = -enemy.vx;
    }
  },
  move: function () {
    enemy.x = enemy.x + enemy.vx;
  },
};

function setup() {
  createCanvas(400, 400);
  enemy.random();
  player.random();
}
function draw() {
  background(220);
  enemy.draw();
  enemy.move();
  enemy.bounce();

  player.draw();
  player.move();
}
function movePlayer() {
  player.x = mouseX;
}
