const router = require('express').Router();
const { request, response } = require('express');
const { Product, CartProduct, Cart, User } = require('../../models');

// Create a new cart



// add new item to cart 
router.post('/addCart', async (req, res) => {
    try {
        const cartData = await CartProduct.create(req.body);
        res.status(200).json(cartData);
    } catch (err) {
        res.status(400).json(err);
    }
});


// delete from cart
router.delete('/cart/:part_id', async (req, res) => {
    try {
        var dbCartData = await CartProduct.findOne({
            where: {
                cart_id: req.session.cartID, 
                product_id: req.params.part_id }});
        dbCartData = await CartProduct.destroy({
            where: {
                id: dbCartData.id
            }
        });
        return res.json(dbCartData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;

