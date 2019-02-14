const db = require("../models");
// Defining methods for the SummonersController
module.exports = {
    findByName: function (req,res) {
        db.Summoner
        .findOne({where: {name: req.params.name}})
        .then(dbSummoner => res.json(dbSummoner))
        .catch(err => res.status(422).json(err));
    },
    addNew: function (req,res) {
        db.Summoner.create({
            name: req.body.name,
            id: req.body.id,
            accountId: req.body.accountId,
            json: JSON.stringify(req.body),
            updated: req.body.updated})
        .then(newSummoner => res.json(newSummoner))
        .catch((err) => res.status(422).json(err));
    },
    login: function (req,res) {
        console.log(req.session);
        db.User.findOne({where: {name: req.body.name}})
        .then(authUser => {
            if(authUser) {
                if(authUser.email === req.body.email) {
                    req.session.user_Id = authUser.id;
                    req.session.cookie.MaxAge = 60000;
                    console.log(req.session);
                    res.json(authUser);
                } else {
                    res.json(authUser);
                }
            } else {
                db.User.create({
                    name: req.body.name,
                    email: req.body.email
                })
                .then(newUser => {
                    req.session.user_Id = newUser.id;
                    req.session.cookie.MaxAge = 60000;
                    res.json(newUser)})
                .catch(err => res.status(422).json(err));
            }
        })
        .catch((err) => res.status(422).json(err));
    }
};
