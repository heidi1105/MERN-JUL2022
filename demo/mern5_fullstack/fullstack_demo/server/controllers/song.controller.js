const Song = require("./../models/song.model")

module.exports.testApi = (req, res) => {
    res.json({ status: "ok" })
}

// Get all
module.exports.allSongs = (req, res) => {
    Song.find()
        .then(songs => res.json(songs))
        .catch(err => res.json(err))
}


// Get one
module.exports.oneSong = (req, res) => {
    // get id from params
    const idFromParams = req.params.id
    Song.findOne({ _id: idFromParams })
        .then(oneSong => res.json(oneSong))
        .catch(err => res.json(err))
}

// create
module.exports.addSong = (req, res) => {
    const newSong = req.body
    Song.create(newSong)
        .then(song => res.json(song))
        .catch(err => res.json(err))
}


// update -- getOne + create
module.exports.updateSong = (req, res) => {
    // grab id from params
    const idFromParams = req.params.id
    const updateValue = req.body
    // update: criteria, updatedValue, options
    Song.findOneAndUpdate(
        { _id: idFromParams },
        updateValue,
        { new: true, runValidators: true }
    )
        .then(updatedSong => res.json(updatedSong))
        .catch(err => res.json(err))
}

// delete
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({ _id: req.params.id })
        .then(message => res.json(message))
        .catch(err => res.json(err))
}