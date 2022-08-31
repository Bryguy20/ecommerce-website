const { Category } = require('../models');

const categorydata = [
{
    "name": "Home & Bath",
    "filename": "home-bath.png",
 },
 {
    "name": "Electronics",
    "filename": "Electronic-Devices.png",
 },
 {
    "name": "Art & Collectibles",
    "filename": "collectibles.png",
 },
 {
    "name": "Toys & Entertainment",
    "filename": "Toys.png",
 },
 {
   "name":" Clothing & Accessories",
   "filename": "clothing-accessories.jpg"
 },
 {
   "name":"Tools & Equipment",
   "filename": "tools.jpg"
 }
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;