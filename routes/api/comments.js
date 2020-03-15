const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

router
  .route("/:id")
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);
  
router
  .route("/")
  .get(commentsController.findAll)
  .post(commentsController.create)
  .put(commentsController.update);

module.exports = router;
