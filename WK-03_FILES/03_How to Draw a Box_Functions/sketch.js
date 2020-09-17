// How to draw a box with a function
// Coding Train video: https://www.youtube.com/watch?v=wRHAitGzBrg
// More info: https://p5js.org/examples/structure-functions.html

let box01 = {
  x: 0,
  y: 0,
  width: 50,
  height: 50,
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  rect(box01.x, box01.y, box01.w, box01.h);
}
