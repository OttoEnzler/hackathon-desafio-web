import React, { useState, useEffect } from 'react';

const VerValoraciones = ({ placeId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews(); // Cuando se monta el componente, carga las revisiones
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/places/r/${placeId}`); // Endpoint en tu backend que devuelve las revisiones de películas
            if (!response.ok) {
                throw new Error('Error al cargar las revisiones');
            }
            const data = await response.json();
            setReviews(data.reviews); // Asumiendo que las revisiones se devuelven en un arreglo llamado 'reviews' en el JSON
        } catch (error) {
            console.error('Error:', error.message);
            // Manejar el error en caso necesario
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Revisiones del Lugar</h2>
            <div className="space-y-4">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                        <h3 className="text-xl font-semibold">{review.movieTitle}</h3>
                        <p className="text-gray-600 mb-2">{review.username} - {review.rating} estrellas</p>
                        <p className="text-gray-800">{review.comment}</p>
                    </div>
                ))}
                {reviews.length === 0 && (
                    <p className="text-gray-600">No hay revisiones disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default VerValoraciones;
