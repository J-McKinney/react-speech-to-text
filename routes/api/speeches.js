const router = require("express").Router();
const speechesController = require("../../controllers/speechesController");

// Matches with "/api/books"
router.route("/")
  .get(speechesController.findAll)
  .post(speechesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(speechesController.findById)
  .put(speechesController.update)
  .delete(speechesController.remove);

module.exports = router;
