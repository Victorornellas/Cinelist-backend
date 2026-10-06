const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    movieId: Number,
    title: String,
    posterPath: String,
    voteAverage: Number,
})

module.exports = mongoose.model('Favorite', favoriteSchema);