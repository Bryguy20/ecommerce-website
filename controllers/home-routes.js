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
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            attributes: [
              'id',
              'name',
              'description',
              'price',
              'category_id',
              'filename'
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
});


router.get('/product/:id', async (req, res) => {
  
    try {
      const dbProductData = await Product.findByPk(req.params.id);

      const product = dbProductData.get({ plain: true });

      res.render('productView', { product , loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
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
  if (!req.session.loggedIn) {
    res.redirect('/login');
} else {
  try {
    const dbCartData = await Cart.findOne({
      where: { id: req.session.userCart },
      include: [
        {
          model: Product, through: CartProduct,
          attributes: [
            'id',
            'name',
            'description',
            'price',
            'filename'
          ]
        },
      ],
    })
    var cartTotal
      const cart = dbCartData.get({ plain: true });
      var cartTotal = cart.products.reduce((product,acc) => acc + (product.qty * product.price),0);

    res.render('cart', { cart,cartTotal: cartTotal, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
});
module.exports = router;