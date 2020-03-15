const router = require("express").Router();
const comment = require("./comment");

router.use("/comment", comment);

module.exports = router;
