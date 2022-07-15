const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    title : {
        type: String,
        required : [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minlength: [3,"Artist must be at least 3 characters"]
    },
    rating: {
        type: Number,
        min: [0, "Rating must be positive"],
        max: [10, "Max rating is 10"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Song', SongSchema)

