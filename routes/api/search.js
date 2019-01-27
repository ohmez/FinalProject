const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// Matches with "/api/summoner/:name"
router.route("/:name")
  .get(dbController.findByName)
  .post(dbController.addNew);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(dbController.findById)
//   .put(dbController.update)
//   .delete(dbController.remove);

module.exports = router;
