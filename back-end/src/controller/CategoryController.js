const Categoria = require('../models/CategoryModel'); 

// Crear una nueva categoría
module.exports.createCategory = async (req, res) => {
    const { nombre, lugar, imagen } = req.body;

    try {
        const newCategoria = await Categoria.create({ nombre, lugar, imagen });
        res.status(201).json({ categoria: newCategoria });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría', error });
    }
};

// Obtener todas las categorías
module.exports.findAllCategories = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json({ categorias });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
};
