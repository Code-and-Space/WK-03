let speed = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  //bottom black circle
  fill(0); //black
  push();
  translate(0, 600);
  rotate(speed);
  ellipse(400, 0, 80, 80);
  pop();

  //black handle - big rectangle
  fill(0); //black
  push();
  translate(400, 250);
  rotate(speed);
  rect(0, 200, 80, 300);
  pop();

  //bottom white small circle
  fill(255); //white
  push();
  translate(440, 300);
  rotate(speed);
  ellipse(-40, 300, 40, 40);
  pop();

  //white thin handle part
  fill(255); //white
  push();
  translate(400, 155);
  rotate(speed);
  rect(0, 300, 5, 270);
  pop();

  //wrench head circle
  fill(0);
  push();
  translate(350, 250);
  rotate(speed);
  ellipse(50, 0, 150, 150);
  pop();

  //angled wrench head
  fill(255);
  push();
  translate(380, 220);
  rotate(151);
  rect(0, 0, 60, 110, 10);
  pop();

  speed = speed+0.25;
}
