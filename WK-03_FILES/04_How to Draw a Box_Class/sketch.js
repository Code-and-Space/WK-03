// How to draw a box with class
// Coding Train video: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
// Sections 6 Object-Oriented Programming (6.1, 6.2, 6.3)

let boxAtt = {
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
  boxDraw(boxAtt);
}

function boxDraw(boxIn) {
  rect(boxIn.x, boxIn.y, boxIn.width, boxIn.height);
}
