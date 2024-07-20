const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    },
    placeId: {
        type: String, // Almacena el Place ID de Google Maps
        required: true
    }
});

module.exports = mongoose.model('Review', ReviewSchema);
