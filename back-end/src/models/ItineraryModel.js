const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    days: [
        {
            date: {
                type: Date,
                required: true
            },
            places: [
                {
                    placeName: {
                        type: String,
                        required: true
                    },
                    placeId: {
                        type: String,
                        required: true
                    },
                    time: {
                        type: Number,
                        required: true
                    }
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Itinerary', ItinerarySchema);
