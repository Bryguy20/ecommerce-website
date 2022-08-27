// const router = require('express').Router();
// const { request, response } = require('express');
// const {Category, Product } = require('../../models');
// const Cart = require('../../models/Cart');

// router.get('/cart', async (req, res) => {
//   try {
//       const dbCartData = await Cart.findAll({
//           include: [
//               {
//                   model: Product,
//                   attributes: [
//                       'id',
//                       'name',
//                       'Description',
//                       'price',
//                       'image'
//                   ]
//               },
//           ],
//       })

//       const cart = dbCartData.map((product) => 
//       product.get({ plain: true })
//       );
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }

// });

// // add new item to cart 
// router.post('/cart/:id', loggedIn, (req, res) => {
//     try{

//      dbCartData.create({
//          name: request.name,
//          descrption: request.Descrption,
//          image: request.image,
//          price: request.price,
//      }) .then (function(addedItem) {

//         response.redirect('/product');
//      }) 
//     }catch(err) {
//          console.log(err);
//          res.status(500).json(err);
//      } 
// });


// // delete from cart
// router.delete('/cart/:id', loggedIn,function(req,res) {
//    try{ 
//     dbCartData.destroy({
//     where: {
//         loggedIn: request.login.id,
//     }
//     }) .then(function() {
//         response.redirect('/cart');
//     }) 
// } catch(err) {
//         console.log(err);
//         res.status(500).json(err)
//     }
// })

// module.exports = router; 

