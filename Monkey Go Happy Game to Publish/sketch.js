var monkey;
var banana;
var stone;
var jungle;

function preload() {
  monkey.loadImage(monkey_1.png, monkey_2.png, monkey_3.png, monkey_4.png, monkey_5.png, monkey_6.png, monkey_7.png, monkey_8.png, monkey_9.png, monkey_10.png);
  stone.loadImage(banana.png);
  jungle.loadImage(jungle.png);
  banana.loadImage(banana.png);
  stone.loadImage(stone.png);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawSprites();
}