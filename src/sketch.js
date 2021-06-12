let x, y;

let speed = 0.1

function updateBallPos() {
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

function showBall() {
  // fill(0, 153, 0);
  noFill();
  ellipse(x, y, 24, 24);
}

function setup() {
  console.log('setup p5js')
  var sketchCanvas = createCanvas(900, 900);
  sketchCanvas.parent("nasit-canvas");
  noStroke();
  background(102, 178, 255);

  // ladder
  fill(127, 0, 255);
  rect(400, 0, 50, 900);

  // init ball
  x = width / 2;
  y = height;
}

function draw() {
  showBall()
  updateBallPos()
}
