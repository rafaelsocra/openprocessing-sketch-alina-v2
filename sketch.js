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
  if (!started) {
    started = true;
    background('#f2f2f2'); // limpa só uma vez
    return;
  }

  // sorteia nova imagem a cada clique
  let r = floor(random(photos.length));
  currentImage = photos[r];
}

function draw() {
  // TEXTO INICIAL (canvas limpo)
  if (!started) {
    background('#f2f2f2');
    fill(0, 128); // 50% opacidade
    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );
    return;
  }

  // MULTIPLICAÇÃO AO ARRASTAR (SEM LIMPAR O FUNDO)
  if (mouseIsPressed && currentImage) {
    let w = currentImage.width / 4;
    let h = currentImage.height / 4;
    image(currentImage, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
