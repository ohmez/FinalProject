const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// Matches with "/api/login/
router.route("/")
  .post(dbController.login);

// router.route("/new")
// .post(dbController.signUp);

module.exports = router;
