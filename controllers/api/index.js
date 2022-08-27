const router = require("express").Router();
const userRoutes = require("./userRoutes");

const cartRoutes = require("./cart");

router.use("/users", userRoutes);
router.use("/cart", cartRoutes);


module.exports = router;
