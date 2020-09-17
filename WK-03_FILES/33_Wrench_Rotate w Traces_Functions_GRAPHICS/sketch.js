let circ01 = {
  color: 0,
  transX: 0,
  transY: 600,
  speed: 0,
  x: 400,
  y: 0,
  diameter: 80
}

let rect01 = {
  color: 0,
  transX: 400,
  transY: 250,
  transAngle: 0,
  speed: 0,
  x: 0,
  y: 200,
  width: 80,
  height: 300,
  radius: 0
}

let circ02 = {
  color: 255,
  transX: 440,
  transY: 300,
  speed: 0,
  x: -40,
  y: 300,
  diameter: 40
}

let rect02 = {
  color: 255,
  transX: 400,
  transY: 155,
  transAngle: 0,
  speed: 0,
  x: 0,
  y: 300,
  width: 5,
  height: 270,
  radius:0
}

let circ03 = {
  color: 0,
  transX: 350,
  transY: 250,
  speed: 0,
  x: 50,
  y: 0,
  diameter: 150
}

let rect03 = {
  color: 255,
  transX: 380,
  transY: 220,
  transAngle: 151,
  speed: 0,
  x: 0,
  y: 0,
  width: 60,
  height: 110,
  radius: 10
}

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER)
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  //bottom black circle
  displayCircle(circ01)
  diagramCircle(circ01);

  //black handle rectangle
  displayRect(rect01);
  diagramRect(rect01);

  //bottom white circle
  displayCircle(circ02)
  diagramCircle(circ02);

  //white thin handle part
  displayRect(rect02)
  diagramRect(rect02);

  //wrench head circle
  displayCircle(circ03)
  diagramCircle(circ03);

  //angled wrench head
  displayRect(rect03)
  diagramRect(rect03);

  // speed = speed + 0.25;
}

function displayCircle(circleGeo) {
  noStroke();
  fill(circleGeo.color);
  push();
  translate(circleGeo.transX, circleGeo.transY);
  rotate(circleGeo.speed);
  ellipse(circleGeo.x, circleGeo.y, circleGeo.diameter, circleGeo.diameter);
  circleGeo.speed = circleGeo.speed + 0.25;
  pop();
}

function diagramCircle(circleGeo) {
  hypotenuse = dist(0, 0, circleGeo.x, circleGeo.y);
  stroke(255);
  noFill();
  strokeWeight(0);
  point(circleGeo.transX, circleGeo.transY);
  strokeWeight(0.5);
  fill(255, 255, 255, 20);
  circle(circleGeo.transX, circleGeo.transY, hypotenuse*2 + circleGeo.diameter);
}

function displayRect(rectGeo) {
  fill(rectGeo.color);
  noStroke();
  if (rectGeo.transAngle === 0) {
    push()
    translate(rectGeo.transX, rectGeo.transY);
    rotate(rectGeo.speed);
    rect(rectGeo.x, rectGeo.y, rectGeo.width, rectGeo.height, rectGeo.radius);
    pop()
    rectGeo.speed = rectGeo.speed + 0.25;
  } else {
    push()
    translate(rectGeo.transX, rectGeo.transY);
    rotate(rectGeo.transAngle);
    rect(rectGeo.x, rectGeo.y, rectGeo.width, rectGeo.height, rectGeo.radius);
    pop()
  }
}

function diagramRect(rectGeo) {
  stroke(255)
  strokeWeight(0.25);
  point(rectGeo.transX, rectGeo.transY)
  strokeWeight(0.5)
  fill(255, 255, 255, 20);
  circle(rectGeo.transX, rectGeo.transY, rectGeo.y*2 + rectGeo.height)
  circle(rectGeo.transX, rectGeo.transY, rectGeo.y*2 - rectGeo.height)
}
