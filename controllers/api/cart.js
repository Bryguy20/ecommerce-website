const router = require('express').Router();
const { request, response } = require('express');
const { Product, CartProduct, Cart, User } = require('../../models');




// add new item to cart 
router.post('/:part_id', async (req, res) => {
    try {
        let dbCartData = await CartProduct.create({ cart_id: req.session.userCart, product_id: req.params.part_id });
        dbCartData = dbCartData.get({ plain: true });

        if (!dbCartData) {
            dbCartData = await CartProduct.create({ cart_id: req.session.userCart, product_id: req.params.part_id });
        } else {
            dbCartData = await CartProduct.update(
                { qty: dbCartData.qty++ },
                {
                    where: {
                        cart_id: req,
                        product_id: req.params.part_id
                    }
                })
        }

        res.status(200).json(dbCartData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete from cart
router.delete('/:part_id', async (req, res) => {
    try {
        var dbCartData = await CartProduct.findOne({
            where: {
                cart_id: req.session.userCart,
                product_id: req.params.part_id
            }
        });

        dbCartData = dbCartData.get({ plain: true });


        if (dbCartData.qty > 1) {
            dbCartData = await CartProduct.update(
                { qty: cartData.qty-- },
                {
                    where: {
                        cart_id: req,
                        product_id: req.params.part_id
                    }
                })
            cartData = await CartProduct.create({ cart_id: req.session.userCart, product_id: req.params.part_id });
        } else if (dbCartData == 1){
            dbCartData = await CartProduct.destroy({
                where: {
                    cart_id: req,
                    product_id: req.params.part_id
                }
            });
        }

        return res.json(dbCartData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;
