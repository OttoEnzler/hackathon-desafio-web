
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard.jsx';
import Title from './utils/Title.jsx';


const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/categories');
                setCategories(response.data.categorias);

            } catch (error) {
                console.error('Error al obtener las categorías:', error);
            }
        };

        fetchCategories();
    }, []); 

    return (
        <div className="">
            <Title title="Listado de categorias" />
            <div className='flex justify-center ' >
                {categories.map(category => (
                    <div key={category._id} className="m-4">
                        <CategoryCard name={category.name} image={category.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
