const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/summoner/:name"
router.route("/:name")
  .get(searchController.findNew);
//   .post(searchController.addNew);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(searchController.findById)
//   .put(searchController.update)
//   .delete(searchController.remove);

module.exports = router;
