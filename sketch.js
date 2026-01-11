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
}

function mousePressed() {
  // no primeiro clique: remove texto e já sorteia imagem
  if (!started) {
    started = true;
  }

  // sorteia imagem a cada clique (inclusive o primeiro)
  let r = floor(random(photos.length));
  currentImage = photos[r];
}

function draw() {
  // TEXTO INICIAL
  if (!started) {
    background('#f2f2f2');
    fill(0, 128); // 15% opacidade
    noStroke();
    text(
      "click touch drag press move feel play rythm",
      width / 2,
      height / 2
    );
    return;
  }

  // MULTIPLICAÇÃO AO ARRASTAR (sem limpar o fundo)
  if (mouseIsPressed && currentImage) {
    let w = currentImage.width / 4;
    let h = currentImage.height / 4;
    image(currentImage, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
