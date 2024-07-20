import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Title from '../../components/utils/Title';

function LugaresPage() {
    const apiKey = "AIzaSyAt3oTHy0DfMpfp4aED_V5_Lj9SQKerUbE";
    const { name } = useParams();
    const [lugares, setLugares] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLugares = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/places/${name}`);
                setLugares(response.data.places);
            } catch (error) {
                console.error('Error al cargar los lugares:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLugares();
    }, [name]);

    if (loading) {
        return <p className="text-center text-xl mt-10">Cargando...</p>;
    }

    if (error) {
        return <p className="text-center text-xl mt-10 text-red-500">Error: {error}</p>;
    }

    return (
        <div className="p-4">
            <Title title={`Lugares relacionados con "${name}"`} />
            <div className="flex flex-wrap gap-4 justify-center">
                {lugares.map((lugar) => (
                    <div key={lugar.id} className="border border-gray-300 rounded-lg p-4 shadow-lg bg-[#fde047] w-64">
                        <h2 className="text-lg font-semibold mb-2">{lugar.name}</h2>
                        <img 
                            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${lugar.photos[0].photo_reference}&key=${apiKey}`} 
                            alt={lugar.name} 
                            className="w-full h-40 object-cover rounded-md mb-2" 
                        />
                        <p className="text-sm text-gray-600 mb-4">{lugar.description}</p>
                        <Link 
                            to={`/lugar/${lugar.place_id}`} 
                            className="text-blue-500 hover:text-blue-700 transition duration-300 font-semibold"
                        >
                            Ver más
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LugaresPage;
