const router = require('express').Router();
const { request, response } = require('express');
const { Product, CartProduct, Cart, User } = require('../../models');


// add new item to cart 
router.post('/:part_id', async (req, res) => {
    const partID = req.params.part_id
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            let dbCartData = await CartProduct.findOne({
                where: {
                    cart_id: req.session.userCart,
                    product_id: partID,
                }
            });
            
            if (!dbCartData) {
                dbCartData = await CartProduct.create({ 
                    cart_id: req.session.userCart, 
                    product_id: partID,
                    qty: 1 });
            } else {
                // dbCartData = dbCartData.get({ plain: true });
                quantity = dbCartData.qty ++;
                dbCartData = await CartProduct.update(
                    { qty: quantity },
                    {
                        where: {
                            cart_id: req.session.userCart,
                            product_id: partID
                        }
                    })
            }
            // dbCartData = dbCartData.get({ plain: true });
            res.status(200).json(dbCartData);
        } catch (err) {
            res.status(400).json(err);
        }
    }
});

// delete from cart
router.delete('/:part_id', async (req, res) => {
    var quantity = 0
    const partID = req.params.part_id
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            var dbCartData = await CartProduct.findOne({
                where: {
                    cart_id: req.session.userCart,
                    product_id: partID
                }
            });

            
            if(dbCartData){
                dbCartData = dbCartData.get({ plain: true });
                quantity = dbCartData.qty
            };
            if (quantity > 1) {
                quantity --;
                dbCartData = await CartProduct.update(
                    { qty: quantity },
                    {
                        where: {
                            cart_id: req.session.userCart,
                            product_id: partID
                        }
                    })
                cartData = await CartProduct.create({ cart_id: req.session.userCart, product_id: partID });
            } else if (quantity == 1) {
                dbCartData = await CartProduct.destroy({
                    where: {
                        cart_id: req.session.userCart,
                        product_id: partID
                    }
                });
            }

            return res.json(dbCartData);
        } catch (err) {
            res.status(500).json(err)
        }
    }
});

module.exports = router;
