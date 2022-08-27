const sequelize = require('../config/connection');
const seedCategory = require('./category');
const seedProduct = require('./itemData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();

  await seedProduct();

  process.exit(0);
};

seedAll();