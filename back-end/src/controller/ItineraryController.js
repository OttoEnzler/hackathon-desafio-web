const Itinerary = require('../models/Itinerary');

// Controlador para crear un nuevo itinerario
exports.createItinerary = async (req, res) => {
    const { username, day, placeName, time } = req.body;
    const { placeId } = req.params; // Captura placeId de la URL

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
            params: {
                place_id: placeId,
                key: apiKey,
            }
        });

        const placeName = response.data.result.name;
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el lugar por placeId', error: error.message });
    }

    

    try {

        if (!itinerary) {
            // Si no existe, crear uno nuevo
            itinerary = new Itinerary({ username, days: [] });
        }

        // Encontrar el día correspondiente o crear uno nuevo si no existe
        let dayObject = itinerary.days.find(d => d.date.toDateString() === new Date(day).toDateString());

        if (!dayObject) {
            dayObject = { date: new Date(day), places: [] };
            itinerary.days.push(dayObject);
        }

        // Agregar el lugar al día del itinerario
        dayObject.places.push({ placeId, placeName, time });

        // Guardar el itinerario actualizado
        const savedItinerary = await itinerary.save();

        res.status(201).json({ message: 'Itinerario creado exitosamente', itinerary: savedItinerary });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el itinerario', error: error.message });
    }
};

// Controlador para obtener todos los itinerarios de un usuario
exports.getAllItineraries = async (req, res) => {
    const { username } = req.params;

    try {
        // Buscar todos los itinerarios del usuario
        const itineraries = await Itinerary.find({ username });

        res.status(200).json({ itineraries });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los itinerarios', error: error.message });
    }
};
