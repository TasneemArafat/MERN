const Player = require('../models/manager.model')

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allDaAuthors => res.json(allDaAuthors))
        .catch(err => res.json(err));
}
 
module.exports.findOneSinglePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json(oneSingleAuthor))
        .catch(err => res.json(err));
}
 
module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
        .then(newlyCreatedPlayer => res.json(newlyCreatedPlayer))
        .catch(err => res.status(400).json(err));
}

 
module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}