const router = require("express").Router();
const searchSummoners = require("./search");

// Summoner routes
router.use("/summoner", searchSummoners);

module.exports = router;
