import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhotosList = () => {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
            const data = await response.json();
            setPhotos(data);
        }) ()
    }, [albumId]);
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Album photo:</h1>
                </div>
                {photos.map(photo=> (
                    <div key={photo.id} className='col-4 mt-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src ={photo.url} alt ={photo.title} className='card-img-top'></img>
                                <h5 className='card-title mt-4'>{photo.title}</h5>
                            </div>
                        </div>

                    </div>
                ))}
                
            </div>
        </div>        
    )
}

export default PhotosList;