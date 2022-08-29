const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const cartRoutes = require("./cart");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);
router.use("/cart", cartRoutes);

const cartRoutes = require("./cart");

router.use("/users", userRoutes);
// router.use("/cart", cartRoutes);

module.exports = router;
