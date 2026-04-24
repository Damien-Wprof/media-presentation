let products = [];
let musicList = [];
let previousIndexes = [];
let previousMusicIndexes = [];

const gamesLeft = document.querySelector("#gam-left");
const gamesRight = document.querySelector("#gam-right");

const musicLeft = document.querySelector("#mus-left");
const musicRight = document.querySelector("#mus-right");

let images = document.querySelectorAll(".carousel:first-of-type .carousel-img");
let musicImages = document.querySelectorAll(".carousel:last-of-type img");


function Product(name, filepath, description) {
  this.name = name;
  this.filepath = filepath;
  this.description = description
  products.push(this);
}

function Music(name, filepath, description) {
  this.name = name;
  this.filepath = filepath;
  this.description
  musicList.push(this);
}


new Product("Warframe", "assets/games/warframe.jpg", "Wareframe is a 3rd person looter shooter");
new Product("Batman: Arkham Knight", "assets/games/batman.jpg", "Batman");
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
new Music ("Dis $ide - GODHANDUSA","assets/music/disside.jpg")
new Music ("Judgement - Kensuke Ushio","assets/music/judgement.jpg")

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function renderImages() {

  let index1 = getRandomIndex(products);
  while (previousIndexes.includes(index1)) {
    index1 = getRandomIndex(products);
  }

  let index2 = getRandomIndex(products);
  while (index2 === index1 || previousIndexes.includes(index2)) {
    index2 = getRandomIndex(products);
  }

  let index3 = getRandomIndex(products);
  while (
    index3 === index1 ||
    index3 === index2 ||
    previousIndexes.includes(index3)
  ) {
    index3 = getRandomIndex(products);
  }

  images[0].src = products[index1].filepath;
  images[1].src = products[index2].filepath;
  images[2].src = products[index3].filepath;

  previousIndexes = [index1, index2, index3];
}

function renderMusic() {

  let index1 = getRandomIndex(musicList);
  while (previousMusicIndexes.includes(index1)) {
    index1 = getRandomIndex(musicList);
  }

  let index2 = getRandomIndex(musicList);
  while (index2 === index1 || previousMusicIndexes.includes(index2)) {
    index2 = getRandomIndex(musicList);
  }

  let index3 = getRandomIndex(musicList);
  while (
    index3 === index1 ||
    index3 === index2 ||
    previousMusicIndexes.includes(index3)
  ) {
    index3 = getRandomIndex(musicList);
  }

  musicImages[0].src = musicList[index1].filepath;
  musicImages[1].src = musicList[index2].filepath;
  musicImages[2].src = musicList[index3].filepath;

  previousMusicIndexes = [index1, index2, index3];
}




// document.addEventListener("DOMContentLoaded", function() {
  renderImages();
  renderMusic();
  // img.addEventListener
  gamesLeft.addEventListener("click", renderImages);
  gamesRight.addEventListener("click", renderImages);

  musicLeft.addEventListener("click", renderMusic);
  musicRight.addEventListener("click", renderMusic);
// });