
const Category = require('../models/CategoryModel');
const axios = require('axios');

// Controlador para buscar lugares según textQuery obtenido del id de categoría
exports.searchPlacesByCategoryName = async (req, res) => {
    const { categoryName } = req.params;

    try {
        // Buscar la categoría por su nombre en la base de datos
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        // Obtenemos el textQuery asociado a la categoría
        const textQuery = category.textQuery;
        console.log(textQuery);

        // Configurar la solicitud a la API de Google Maps Places
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
            params: {
                query: textQuery,
                key: apiKey,
            }
        });

        // Devolver los lugares encontrados
        const places = response.data.results;
        console.log(places);
        res.json({ places });
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar lugares por categoría', error: error.message });
    }
};

// Controlador para encontrar un lugar por placeId
exports.findPlaceByPlaceId = async (req, res) => {
    const { placeId } = req.params;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
            params: {
                place_id: placeId,
                key: apiKey,
            }
        });

        const place = response.data.result;
        res.json({ place });
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el lugar por placeId', error: error.message });
    }
};
