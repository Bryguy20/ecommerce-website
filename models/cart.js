const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
{
  item_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
      type: DataTypes.STRING,
      references: {
          model: 'product',
          key: 'id',
      },
      price: {
          type: DataTypes.FLOAT,
          allowNull: false,
          references: {
              model: 'product',
              key: 'id',
          }
      }
  }
},
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'cart',
  }

);

module.exports = Cart;