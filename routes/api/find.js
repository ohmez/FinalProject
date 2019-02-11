const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/find/:name"
router.route("/:name")
  .get(searchController.findOrAdd);

module.exports = router;
