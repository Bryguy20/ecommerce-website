const { Product } = require('../models');

const productdata = [
  {
    "name": "Awesome Generic Coffee Pods",
    "description": "Ten count of medium roast amazing arabica coffee pods.",
    "price": 10.00,
    "filename":"coffeePod.png",
    "category_id": 1
  },
  {
    "name": "Sun Glasses",
    "description": "Desinger style fashionable polarized Glasses.",
    "price": 50.00,
    "filename":"sunglasses.png",
    "category_id": 5
  },
  {
    "name": "Phone mount",
    "description": "Easy to use phone mount for your car that fits into any cup holder.",
    "price": 20.00,
    "filename":"PhoneMount.png",
    "category_id": 2
  },
  {
    "name": "Mouse pad",
    "description": "Dark mouse pad with foam rubber backing to prevent slipping.",
    "price": 5.00,
    "filename":"MousePad.png",
    "category_id": 2
  },
  {
    "name": "Small Mirror",
    "description": "Small mirror that is easily adjustable.",
    "price": 10.00,
    "filename":"SmallMirror.png",
    "category_id": 1
  },
  {
    "name": "Fuzzy Bathroom Rug",
    "description": "Ultra Plush comfortable bathroom mat. ",
    "price": 25.00,
    "filename":"Rug.png",
    "category_id": 1
  },
  {
    "name": "Organization Tray",
    "description": "This stylish drawer is a space-saving design that requires no tools and includes nine customizable compartments.",
    "price": 10.00,
    "filename":"OrganizationTray.png",
    "category_id": 1
  },
  {
    "name": "All Purpose Cleaner",
    "description": "This all in one cleaner can clean anything in just one spray.",
    "price": 10.00,
    "filename":"Cleaner.png",
    "category_id": 1
  },
  {
    "name": "RGB Gaming Mouse",
    "description": "The lights will improve your gameplay.",
    "price": 30.00,
    "filename":"mouse.png",
    "category_id": 2
  },
  {
    "name": "Usb Type C Charger",
    "description": "Three foot charging cable and brick.",
    "price": 10.00,
    "filename":"Usb.png",
    "category_id": 2
  },
  {
    "name": "Mechanical Keyboard",
    "description": "Distinctive and fun clicky sounds with each keystroke.",
    "price": 40.00,
    "filename":"Keyboard.png",
    "category_id": 2
  },
  {
    "name": "Hour glass",
    "description": "Time flys by while having fun! wach these grains of sand fall with style.",
    "price": 10.00,
    "filename":"Hourglass.png",
    "category_id": 1
  },
  {
    "name": "Classic Art Painting",
    "description": "the classic great wave painting.",
    "price": 40.00,
    "filename":"GreatWave.png",
    "category_id": 3
  },
  {
    "name": "Small Sculpture",
    "description": "this decorative little statue will impress and add culture to your living space.",
    "price": 40.00,
    "filename":"Sculpture.png",
    "category_id": 3
  },
  {
    "name": "Pokemon Card Set",
    "description": "These things are still collectables rite? who know you might just get that holographic charizard card.",
    "price": 10.00,
    "filename":"Pokemon.png",
    "category_id": 3
  },
  {
    "name": "Smart TV",
    "description": "42 inch 4k TV built in wifi support for all the streaming services.",
    "price": 200.00,
    "filename":"SmartTv.png",
    "category_id": 1
  },
  {
    "name": "PS5",
    "description": "The scalpers are no longer hoarding all the gaming consoles get yours now!",
    "price": 500.00,
    "filename":"ps5.png",
    "category_id": 4
  },
  {
    "name": "Monopoly",
    "description": "This classic board game is fun for the whole family!",
    "price": 10.00,
    "filename":"monopoly.png",
    "category_id": 4
  },
  {
    "name": "Green Polo Shirt",
    "description": "Classic style to match your amazing look.",
    "price": 40.00,
    "filename":"polo.png",
    "category_id": 5
  },
  {
    "name": "Blue Jeans",
    "description": "Every closet needs a pair of classic blue jeans.",
    "price": 40.00,
    "filename":"jeans.png",
    "category_id": 5
  },
  {
    "name": "Running Shoes",
    "description": "These shoes will make your weekly jog much more comforatable.",
    "price": 50.00,
    "filename":"shoes.png",
    "category_id": 5
  },
  {
    "name": "Cute Black Dress",
    "description": "The perfect dress for any occasion.",
    "price": 40.00,
    "filename":"BlackDress.png",
    "category_id": 5
  },
  {
    "name": "Power Drill",
    "description": "This power drill will have you completing all those DIY projects in no time.",
    "price": 40.00,
    "filename":"Drill.png",
    "category_id": 6
  },
  {
    "name": "Adjustable Wrench",
    "description": "A wrench similar to an open end wrench but having one fixed jaw and one adjustable jaw.",
    "price": 10.00,
    "filename":"Wrench.png",
    "category_id": 6
  },
  {
    "name": "Hammer",
    "description": "Now everything looks like a nail.",
    "price": 10.00,
    "filename":"Hammer.png",
    "category_id": 6
  },
  {
    "name": "Screw Driver",
    "description": "A tool that is used for turning screws.",
    "price": 10.00,
    "filename":"ScrewDriver.png",
    "category_id": 6
  }
]

const seedProduct = () => Product.bulkCreate(productdata);

module.exports = seedProduct;