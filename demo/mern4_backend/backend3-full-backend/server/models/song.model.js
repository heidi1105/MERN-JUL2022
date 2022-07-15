const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    title : {
        type: String,
        required : [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    artist: String,
    rating: Number
}, {timestamps: true})

module.exports = mongoose.model('Song', SongSchema)

