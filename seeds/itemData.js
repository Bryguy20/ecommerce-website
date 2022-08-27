const { Product } = require('../models');

const productdata = [
  {
    "item": "Awesome Generic Coffee Pods",
    "description": "Ten count of medium roast amazing arabica coffee pods.",
    "price": 10
  },
  {
    "item": "Sun Glasses",
    "description": "Desinger style fashionable polarized Glasses.",
    "price": 50
  },
  {
    "item": "Phone mount",
    "description": "Easy to use phone mount for your car that fits into any cup holder",
    "price": 20
  },
  {
    "item": "Mouse pad",
    "description": "Dark mouse pad with foam rubber backing to prevent slipping.",
    "price": 5
  },
  {
    "item": "Small Mirror",
    "description": "small mirror that is easily adjustable",
    "price": 10
  },
  {
    "item": "Fuzzy Bathroom Rug",
    "description": "Ultra Plush comfortable bathroom mat ",
    "price": 25
  },
  {
    "item": "organization tray",
    "description": "This stylish drawer is a space-saving design that requires no tools and includes nine customizable compartments.",
    "price": 10
  },
  {
    "item": "All purpose cleaner",
    "description": "This all in one cleaner can clean anything in just one spray",
    "price": 10
  },
  {
    "item": "RGB gaming mousse",
    "description": "the lights will improve your gameplay",
    "price": 30
  },
  {
    "item": "usb type c charger",
    "description": "three foot charging cable and brick",
    "price": 10
  },
  {
    "item": "mechanical keyboard",
    "description": "distinctive and fun clicky sounds with each keystroke",
    "price": 40
  },
  {
    "item": "Hour glass",
    "description": "Time flys by while having fun! wach these grains of sand fall with style",
    "price": 10
  },
  {
    "item": "Classic art Painting",
    "description": "the classic great wave painting",
    "price": 40
  },
  {
    "item": "small sculpture",
    "description": "this decorative little statue will impress and add culture to your living space",
    "price": 40
  },
  {
    "item": "Pokemon card set",
    "description": "These things are still collectables rite? who know you might just get that holographic charizard card",
    "price": 10
  },
  {
    "item": "smart TV",
    "description": "42 inch 4k TV built in wifi support for all the streaming services",
    "price": 200
  },
  {
    "item": "PS5",
    "description": "the scalpers are no longer hoarding all the gaming consoles get yours now!",
    "price": 499
  },
  {
    "item": "monopoly",
    "description": "this classic board game is fun for the whole family",
    "price": 10
  },
  {
    "item": "Green Polo shirt",
    "description": "classic style to match your amazing look",
    "price": 40
  },
  {
    "item": "Blue jeans",
    "description": "every closet needs a pair of classic blue jeans",
    "price": 40
  },
  {
    "item": "running shoes",
    "description": "these shoes will make your weekly jog much more comforatable",
    "price": 50
  },
  {
    "item": "cute black dress",
    "description": "the perfect dress for any occasion",
    "price": 40
  },
  {
    "item": "power drill",
    "description": "this power drill will have you completing all those DIY projects in no time",
    "price": 40
  },
  {
    "item": "adjustable wrench",
    "description": "a wrench similar to an open end wrench but having one fixed jaw and one adjustable jaw.",
    "price": 10
  },
  {
    "item": "Hammer",
    "description": "now everything looks like a nail",
    "price": 10
  },
  {
    "item": "screw driver",
    "description": "a tool that is used for turning screws",
    "price": 10
  }
]

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;