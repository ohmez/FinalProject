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
    }
};
