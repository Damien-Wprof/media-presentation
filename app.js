let products = [];
let musicList = [];

let images = document.querySelectorAll(".carousel:first-of-type .carousel-img");
let musicImages = document.querySelectorAll(".carousel:last-of-type img");


function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;

  products.push(this);
}

function Music(name, filepath) {
  this.name = name;
  this.filepath = filepath;

  musicList.push(this);
}


new Product("Warframe", "assets/games/warframe.jpg");
new Product("batman", "assets/games/batman.jpg");
new Product("Dying Light", "assets/games/dyinglight.jpg");
new Product("Helldivers", "assets/games/helldivers.jpg");
new Product("Cyberpunk", "assets/games/cyberpunk.jpg");
new Product("Fallout", "assets/games/fallout.jpg");
new Product("Rimworld", "assets/games/rimworld.jpg");
new Product("Zomboid", "assets/games/zomboid.jpg");
new Product("Grand Theft Auto V", "assets/games/gta.jpg");
new Product("Red Dead Redemption 2", "assets/games/rdr2.jpg");
new Product("Skyrim", "assets/games/skyrim.jpg");

new Music ("2009 Reggie Bush - $uicideboy$", "assets/music/thywillbedone.png")
new Music ("Clouds as Witnesses - $uicideboy$", "assets/music/cloudsaswitnesses.jpg")
new Music ("Euphoria - Kendrick Lamar", "assets/music/euphoria.jpg")
new Music ("Enter Sandman - Metallica", "assets/music/entersandman.jpg")
new Music ("Eulogy - $uicideboy$", "assets/music/eulogy.jpg")
new Music ("COUNT YOUR BLESSINGS - $uicideboy$", "assets/music/thykingdomcome.jpg")
new Music ("Truth - Seether", "assets/music/truth.jpg")
new Music ("Rockstar In His Prime - Juice WRLD", "assets/music/rockstar.jpg")

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function renderImages() {
  let usedIndexes = [];

  for (let i = 0; i < images.length; i++) {
    let randomIndex;

    do {
      randomIndex = getRandomIndex(products);
    } while (usedIndexes.includes(randomIndex));

    usedIndexes.push(randomIndex);
    images[i].src = products[randomIndex].filepath;
  }
}

function renderMusic() {
  let usedIndexes = [];

  for (let i = 0; i < musicImages.length; i++) {
    let randomIndex;

    do {
      randomIndex = getRandomIndex(musicList);
    } while (usedIndexes.includes(randomIndex));

    usedIndexes.push(randomIndex);
    musicImages[i].src = musicList[randomIndex].filepath;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  renderImages();
  renderMusic();
});