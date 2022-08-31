
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CartProduct extends Model {}

CartProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id:  {
        type: DataTypes.INTEGER,
        allowNUll:false,
        references: {
            model: 'cart',
            key: 'id',
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id',
        }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNUll: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cartproduct',
  }
);

module.exports = CartProduct;


