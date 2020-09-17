// How to move a JavaScript Object
//  This was adapted from Dan Shiffman's Coding Train
//  See links 3.1, 3.2, 3.3
//  https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let box = {
  x: 0,
  y: 0,
  w: 50,
  h: 50,
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  rect(box.x, box.y, box.w, box.h);
}
