import React, { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';  
import axios from 'axios'; 
import Title from '../../components/utils/Title';
import Valoraciones from "./Valoraciones";

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
        <div>  
            <Title title={lugar.name}/>
            {lugar.photos && lugar.photos.length > 0 && (  
                <img  
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${lugar.photos[0].photo_reference}&key=${apiKey}`}  
                    alt={lugar.name}  
                    style={{ width: '100%', borderRadius: '5px' }}  
                />  
            )}  
            <p>{lugar.formatted_address}</p>  
            <p>{lugar.formatted_phone_number}</p>  
            <p>{lugar.rating ? `Rating: ${lugar.rating}` : 'Sin calificación'}</p>  
            <p>{lugar.opening_hours ? 'Horas de operación disponibles' : 'Horas de operación no disponibles'}</p>  
            <p>{lugar.website && <a href={lugar.website} target="_blank" rel="noopener noreferrer">Website</a>}</p>  
            <p>{lugar.description}</p>  
            <p>{lugar.user_ratings_total} valoraciones</p>  
            <Valoraciones placeId={lugar.place_id}/>
        </div>  
    );  
}  

export default LugarPage;  