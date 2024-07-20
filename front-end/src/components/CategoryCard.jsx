import React from 'react';
import { Link } from 'react-router-dom'; 


const CategoryCard = ({ name, image }) => {
    return (
        <Link to={`/lugares/${name}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-[#fde047]">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#fde047]">
                <img src={image} alt={name} className="w-[300px] h-[300px] " />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;
