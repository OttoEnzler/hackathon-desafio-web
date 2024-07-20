import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Title from '../../components/Utils/Title';

function LugaresPage() {
    const apiKey= "AIzaSyAt3oTHy0DfMpfp4aED_V5_Lj9SQKerUbE";
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
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <Title title={`Lugares relacionados con "${name}"`}/>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {lugares.map((lugar) => (
                    <div key={lugar.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '200px' }}>
                        <h2>{lugar.name}</h2>
                        <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${lugar.photos[0].photo_reference}&key=${apiKey}`} alt={lugar.name} style={{ width: '100%', borderRadius: '5px' }} className="w-[300px] h-[200px] "/>
                        <p>{lugar.description}</p>
                        <Link to={`/lugar/${lugar.place_id}`} style={{ textDecoration: 'none', color: '#00f' }}>Ver más</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LugaresPage;
