const Review = require('../models/ReviewsModel');

// Controlador para crear una nueva revisión con placeId de la URL
exports.createReview = async (req, res) => {
    const { username, rating, comment } = req.body;
    const { placeId } = req.params; // Captura placeId de la URL

    try {
        const newReview = new Review({
            username,
            rating,
            comment,
            placeId // Agrega placeId al objeto de revisión
        });

        const savedReview = await newReview.save();
        res.status(201).json({ review: savedReview });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la revisión', error: error.message });
    }
};

// Controlador para obtener todas las revisiones por placeId
exports.getReviewsByPlaceId = async (req, res) => {
    const { placeId } = req.params;

    try {
        const reviews = await Review.find({ placeId });
        res.json({ reviews });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las revisiones por placeId', error: error.message });
    }
};