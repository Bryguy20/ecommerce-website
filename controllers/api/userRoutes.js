const router = require('express').Router();
const { User, Cart} = require('../../models');


// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    let userCart = await Cart.create({user_id: dbUserData.id});
    userCart = userCart.get({ plain: true })
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userCart = userCart.id;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Login
router.post('/login', async (req, res) => {
  try {
    let dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    dbUserData = dbUserData.get({ plain: true })
    
    let userCart = await Cart.findOne({
      where: {
        user_id: dbUserData.id,
      },
    })
    console.log(dbUserData.id);

    if(userCart === null) {
      userCart = await Cart.create({user_id: dbUserData.id});
    } 

    userCart = userCart.get({ plain: true })
    console.log(userCart.id);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userCart = userCart.id;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
    console.log(req.session.userCart);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
