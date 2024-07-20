const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController');

// Ruta para crear un nuevo itinerario
router.post('/', itineraryController.createItinerary);

module.exports = router;
