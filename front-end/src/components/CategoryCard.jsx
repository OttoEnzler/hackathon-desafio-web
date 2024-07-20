import React from 'react';

const CategoryCard = ({ name, image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image} alt={name} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
            </div>
        </div>
    );
};

export default CategoryCard;
