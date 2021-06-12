
let x, y;
let speed = 1.4

function getHeight() {
  return height - 25
}

function setup() {
  console.log('setup p5js sketch')
  var sketchCanvas = createCanvas(900, 900);
  sketchCanvas.parent("nasit-canvas");

  // init ball
  x = width / 2;
  y = getHeight();

  state = "stop"
}

function draw() {
  // background
  noStroke();
  background(102, 178, 255);

  // ladder
  fill(127, 0, 255);
  rect((width / 2) - 25, 0, 60, 900);

  // ball
  stroke(50);
  fill(0, 153, 0);
  ellipse(x, y, 35, 35);

  // TODO investigate jiggling
  // Jiggling randomly on the horizontal axis
  // x = x + random(-1, 1);

  if (window.gameStateIsInMove()) {
    // Moving up at a constant speed
    y -= speed;
  }

  // Reset to the bottom
  if (y < 0) {
    y = getHeight();
  }
}
