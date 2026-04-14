let products = [];

let images = document.querySelectorAll(".carousel:first-of-type .carousel-img");

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;

  products.push(this);
}

// Products
new Product("Warframe", "assets/warframe.jpg");
new Product("batman", "assets/batman.jpg");
new Product("dyinglight", "assets/dyinglight.jpg");
new Product("helldivers", "assets/helldivers.jpg");
new Product("cyberpunk", "assets/cyberpunk.jpg");
new Product("fallout", "assets/fallout.jpg");
new Product("rimworld", "assets/rimworld.jpg");
new Product("zomboid", "assets/zomboid.jpg");
new Product("gta", "assets/gta.jpg");
new Product("rdr2", "assets/rdr2.jpg");
new Product("skyrim", "assets/skyrim.jpg");

function getRandomIndex() {
  return Math.floor(Math.random() * products.length);
}

function renderImages() {
  let usedIndexes = [];

  for (let i = 0; i < images.length; i++) {
    let randomIndex;

    do {
      randomIndex = getRandomIndex();
    } while (usedIndexes.includes(randomIndex));

    usedIndexes.push(randomIndex);
    images[i].src = products[randomIndex].filepath;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  renderImages();
});