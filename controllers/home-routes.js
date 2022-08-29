const router = require('express').Router();
const { Category, Product, Cart, CartProduct } = require('../models');

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Product
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render('homepage', {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
router.get('/category/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            attributes: [
              'id',
              'name',
              'description',
              'price'
            ],
          },
        ],
      });
      const category = dbCategoryData.get({ plain: true });
      res.render('productList', { category, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});


router.get('/product/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbProductData = await Product.findByPk(req.params.id);

      const product = dbProductData.get({ plain: true });

      res.render('productView', { product });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;


router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get('/cart', async (req, res) => {
  try {
    const dbCartData = await Cart.findOne({
      order: ['user_id'],
      where: { user_id: req.session.userID },
      include: [
        {
          model: Product, through: CartProduct,
          attributes: [
            'id',
            'name',
            'Description',
            'price',
            'image'
          ],
          group: 'id'
        },
      ],
    })

    const cart = dbCartData.map((product) =>
      product.get({ plain: true }));
    res.render('productList', { cart, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});
module.exports = router;