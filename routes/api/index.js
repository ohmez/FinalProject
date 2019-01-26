const router = require("express").Router();
const searchBooks = require("./search");

// Book routes
router.use("/search", searchBooks);

module.exports = router;
