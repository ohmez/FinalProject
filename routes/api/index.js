const router = require("express").Router();
const searchSummoners = require("./search");
const findSummoners = require("./find");

// Summoner routes for /api/
router.use("/summoner", searchSummoners);
router.use("/find", findSummoners);
module.exports = router;
