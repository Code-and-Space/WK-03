//  How to move a box with translate
//  This was adapted from Dan Shiffman's Coding Train
//  See links 3.1, 3.2, 3.3
//  https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let boxX = 300;
let speed = 3;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  rectMode(CENTER);

  if (boxX > width || boxX < 0) {
    speed = speed*-1;
  }
  boxX = boxX + speed;
  translate(boxX, 300)
  rect(0, 0, 50, 50);
}
