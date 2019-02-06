const router = require("express").Router();
const searchSummoners = require("./search");
const findSummoners = require("./find");
const firstCheck = require("./first");

// Summoner routes
router.use("/summoner", searchSummoners);
router.use("/find", findSummoners);
router.use("/search",firstCheck);
module.exports = router;
