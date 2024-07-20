import React from 'react';

const CategoryCard = ({ name, image }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#fde047]">
            <img src={image} alt={name} className="w-[300px] h-[300px] " />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
            </div>
        </div>
    );
};

export default CategoryCard;
