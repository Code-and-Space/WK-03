// How to move a box with classes

let boxAtt = {
  x: 0,
  y: 100,
  width: 50,
  height: 50,
  speed: 3
}

let box01;

function setup() {
  createCanvas(600, 600);
  box01 = new box(boxAtt)
}

function draw() {
  background(0);
  box01.move()
  box01.bounce()
  box01.display()
}

class box {
  constructor(boxIn) {
    this.boxIn = boxIn;
  }
  display() {
    rect(this.boxIn.x, this.boxIn.y, this.boxIn.width, this.boxIn.height);
  }
  bounce() {
    if (this.boxIn.x > width || this.boxIn.x < 0) {
      this.boxIn.speed = this.boxIn.speed * -1;
    }
  }
  move() {
    this.boxIn.x = this.boxIn.x + this.boxIn.speed
  }
}
