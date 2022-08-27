const { Category } = require('../models');

const categorydata = [
{
    "name": "Home & Bath"
 },
 {
    "name": "Eletronics"
 },
 {
    "name": "Art & Collectibles"
 },
 {
    "name": "Toys & Entertainment"
 },
 {
   "name":" Clothing & Accessories"
 },
 {
   "name":"Tools & Equipment"
 }
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;