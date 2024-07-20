import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'; 

const Valoraciones = ({ placeId }) => {
    const [formData, setFormData] = useState({
        username: '',
        rating: '',
        comment: '',
        placeId: placeId
    });
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/api/places/r/${placeId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error al enviar la reseña');
            }

            alert('¡Reseña enviada exitosamente!');
            setFormData({
                username: '',
                rating: '',
                comment: '',
                placeId: placeId
            });
        } catch (error) {
            console.error('Error:', error.message);
            alert('Hubo un problema al enviar la reseña. Por favor, inténtalo nuevamente.');
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-8">
            <div
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="flex justify-between items-center cursor-pointer"
            >
                <h2 className="text-2xl font-bold mb-4">Dejar una reseña</h2>
                {isCollapsed ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronUpIcon className="h-5 w-5" />}
            </div>
            {!isCollapsed && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-medium">Nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-md p-2 mt-1"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block font-medium">Calificación (del 1 al 5):</label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-md p-2 mt-1"
                            min="1"
                            max="5"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="comment" className="block font-medium">Comentario:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows="4"
                            value={formData.comment}
                            onChange={handleChange}
                            className="w-full border-gray-300 rounded-md p-2 mt-1"
                            required
                        ></textarea>
                    </div>
                    <input type="hidden" name="placeId" value={placeId} />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Enviar reseña
                    </button>
                </form>
            )}
        </div>
    );
};

export default Valoraciones;
