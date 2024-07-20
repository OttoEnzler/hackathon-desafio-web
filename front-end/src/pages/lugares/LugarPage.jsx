import React, { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';  
import axios from 'axios'; 
import Title from '../../components/utils/Title';
import Valoraciones from "./Valoraciones";
import VerValoraciones from "./VerValoraciones";

function LugarPage() {  
    const apiKey = "AIzaSyAt3oTHy0DfMpfp4aED_V5_Lj9SQKerUbE";  
    const { placeId } = useParams(); // Obtener el placeId de la URL  
    const [lugar, setLugar] = useState(null);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState('');  

    useEffect(() => {  
        const fetchLugarDetail = async () => {  
            try {  
                const response = await axios.get(`http://localhost:3001/api/places/p/${placeId}`);  
                setLugar(response.data.place);  
            } catch (error) {  
                console.error('Error al cargar el detalle del lugar:', error);  
                setError(error.message);  
            } finally {  
                setLoading(false);  
            }  
        };  

        fetchLugarDetail();  
    }, [placeId]);  

    if (loading) {  
        return <p>Cargando...</p>;  
    }  

    if (error) {  
        return <p>Error: {error}</p>;  
    }  

    if (!lugar) {  
        return <p>No se encontró información del lugar.</p>;  
    }  

    return (  
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">  
            <Title title={lugar.name} />
            {lugar.photos && lugar.photos.length > 0 && (  
                <img  
                    className="w-full h-64 object-cover rounded-lg my-4"  
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${lugar.photos[0].photo_reference}&key=${apiKey}`}  
                    alt={lugar.name}  
                />  
            )}  
            <div className="space-y-2">
                <p className="text-lg font-semibold">{lugar.formatted_address}</p>  
                <p className="text-gray-700">{lugar.formatted_phone_number}</p>  
                <p className="text-gray-700">{lugar.rating ? `Rating: ${lugar.rating}` : 'Sin calificación'}</p>  
                <p className="text-gray-700">{lugar.opening_hours ? 'Horas de operación disponibles' : 'Horas de operación no disponibles'}</p>  
                {lugar.website && <p><a className="text-blue-500 hover:underline" href={lugar.website} target="_blank" rel="noopener noreferrer">Website</a></p>}  
                <p className="text-gray-700">{lugar.description}</p>  
                <p className="text-gray-700">{lugar.user_ratings_total} valoraciones</p>  
            </div>
            <Valoraciones placeId={lugar.place_id}/>
            <VerValoraciones placeId={lugar.place_id}/>
        </div>  
    );  
}  

export default LugarPage;
