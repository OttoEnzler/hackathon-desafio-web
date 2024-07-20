const express = require('express');
const router = express.Router();
const reviewsController = require('../controller/ReviewController');

// Ruta para obtener todas las revisiones por placeId
router.get('/r/:placeId', reviewsController.getReviewsByPlaceId);

// Ruta para crear una nueva revisión
router.post('/r/:placeId', reviewsController.createReview);

module.exports = router;
