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
    // findAll: function(req, res) {
    //   db.Summoner
    //     .find(req.query)
    //     .sort({ date: -1 })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // findById: function(req, res) {
    //   db.Summoner
    //     .findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // create: function(req, res) {
    //   db.Summoner
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // update: function(req, res) {
    //   db.Summoner
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //   db.Summoner
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};
