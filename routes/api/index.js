const router = require("express").Router();
const searchSummoners = require("./search");
const findSummoners = require("./find");
const login = require("./login");

// Summoner routes for /api/
router.use("/summoner", searchSummoners);
router.use("/find", findSummoners);
router.use("/login",login);


module.exports = router;
