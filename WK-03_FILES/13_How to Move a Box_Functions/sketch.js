// How to move a box with functions
let box = {
  x: 0,
  y: 0,
  w: 50,
  h: 50,
}

let speed = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  rectMode(CENTER);

  move();
  boxDisplay();
}

function boxDisplay() {
  rect(0, 0, box.w, box.h);
}

function move() {
  if (box.x > width || box.x < 0) {
    speed = speed*-1;
  }
  box.x = box.x + speed;

  // Note: Move box with translate method
  translate(box.x, height/2)
}
