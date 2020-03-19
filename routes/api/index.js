const router = require("express").Router();
const speechRoutes = require("./speeches");

// Speech routes
router.use("/speeches", speechRoutes);

module.exports = router;
