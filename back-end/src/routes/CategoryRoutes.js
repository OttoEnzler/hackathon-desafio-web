// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controller/CategoryController.js');

// Crear una nueva categoría
router.post('/', categoryController.createCategory);

// Obtener todas las categorías
router.get('/', categoryController.findAllCategories);

module.exports = router;
