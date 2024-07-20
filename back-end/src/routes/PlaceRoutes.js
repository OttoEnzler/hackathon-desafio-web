const express = require('express');
const router = express.Router();
const placesController = require('../controller/PlacesController.js');

// Ruta para buscar lugares por texto
router.get('/:categoryName', placesController.searchPlacesByCategoryName);

// Ruta para buscar lugares por nombre de categoría
router.get('/p/:placeId', placesController.findPlaceByPlaceId);

module.exports = router;
