const router = require("express").Router();
const dbController = require("../../controllers/dbController");

// Matches with "/api/summoner/:name"
router.route("/")
  // .get(dbController.findByName)
  .post(function(req,res) {
    var name = req.body.summonerName.trim();
        if(name.length > 3) {
            res.redirect("/profile/"+name);
        } else {
            res.redirect("/");
        }

  });

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(dbController.findById)
//   .put(dbController.update)
//   .delete(dbController.remove);

module.exports = router;
