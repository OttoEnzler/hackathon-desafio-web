
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard.jsx';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error al obtener las categorías:', error);
            }
        };

        fetchCategories();
    }, []); // Ejecuta solo una vez al montar el componente

    return (
        <div className="App">
            <h1>Listado de Categorías</h1>
            <ul>
                {categories.map(category => (
                    <div key={category._id} className="m-4">
                        <CategoryCard name={category.name} image={category.image} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
