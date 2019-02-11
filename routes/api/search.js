const router = require("express").Router();

// Matches with "/api/summoner/
router.route("/")
  .post(function(req,res) {
    var name = req.body.summonerName.trim();
        if(name.length > 3 && name.length < 25) {
            res.redirect("/profile/"+name);
        } else {
            res.redirect("/");
        }
  });
module.exports = router;
