let photos = [];
let currentImage = null;
let started = false;
const totalImages = 10;

function preload() {
  for (let i = 1; i <= totalImages; i++) {
    photos.push(loadImage(`images/${i}.png`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  textAlign(CENTER, CENTER);
  textSize(16);
  background('#f2f2f2');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#f2f2f2');
}

function mousePressed() {
  if (!started) {
    started = true;
    return;
  }

  // sorteia uma imagem a cada clique
  let r = floor(random(photos.length));
  currentImage = photos[r];
}

function draw() {
  background('#f2f2f2');

  // TEXTO INICIAL
  if (!started) {
    fill(0, 128); // 50% opacidade
    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );
    return;
  }

  // DESENHO
  if (mouseIsPressed && currentImage) {
    let w = 450;
    let h = w * (2 / 3);
    image(currentImage, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
