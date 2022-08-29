const router = require("express").Router();
const userRoutes = require("./userRoutes");
<<<<<<< HEAD
const projectRoutes = require("./projectRoutes");
const cartRoutes = require("./cart");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/cart", cartRoutes);
=======

const cartRoutes = require("./cart");

router.use("/users", userRoutes);
// router.use("/cart", cartRoutes);


>>>>>>> e121fb576cd91c2aa8718fef33b7cb2dcf8f7911
module.exports = router;
