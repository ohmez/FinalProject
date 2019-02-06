const router = require("express").Router();
const dbController = require("../../controllers/dbController");
const axios = require("axios");


// Matches with "/api/summoner/:name"
router.route("/")
  .post(function(req,res,next) {
    var name = JSON.stringify(req.body.summonerName.trim());
    console.log(name);
    axios.get("/api/summoner/"+name)
    .then(res => res.json(res))
    .catch(err=> res.json(err));
    // res.json(name);
    // if(name.length > 3) {
    //     res.redirect("/profile/"+name);
    // } else {
    //     res.redirect("/");
    // }
  });

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(dbController.findById)
//   .put(dbController.update)
//   .delete(dbController.remove);

module.exports = router;
