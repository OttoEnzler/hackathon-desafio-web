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

// Controlador para encontrar una categoría por su ID
exports.findCategoryById = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        res.json({ category });
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar la categoría', error });
    }
};
