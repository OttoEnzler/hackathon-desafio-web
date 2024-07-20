const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    placeId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    address: String,
    location: {
        lat: Number,
        lng: Number,
    }
});

const Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
