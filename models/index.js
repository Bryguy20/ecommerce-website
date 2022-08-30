const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const Cart = require('./Cart');
const CartProduct = require('./CartProduct');

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Cart.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasOne(Cart, {
  foreignKey: 'user_id'
})

Cart.belongsToMany(Product, {
through: {
  model: CartProduct,
  unique: false
}
})

Product.belongsToMany(Cart, {
  through: {
    model: CartProduct,
    unique: false
  }
})


module.exports = { User, Category, Product, Cart, CartProduct };