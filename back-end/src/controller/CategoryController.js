const Category = require('../models/CategoryModel'); 

// Controlador para crear una nueva categoría
exports.createCategory = async (req, res) => {
    try {
        console.log(req.body);
        const { name, image } = req.body;
        const newCategory = new Category({ name, image });
        const savedCategory = await newCategory.save();
        res.status(201).json({ categoria: savedCategory });
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        res.status(500).json({ message: 'Error al crear la categoría', error });
    }
};
// Obtener todas las categorías
module.exports.findAllCategories = async (req, res) => {
    try {
        const categorias = await Category.find();
        res.json({ categorias });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
};
