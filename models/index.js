const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');

Category.hasMany(Product, {
  foreignKey: 'Category_id',
});

Product.belongsTo(Category, {
  foreignKey: 'Category_id',
});

module.exports = { User, Category, Product };