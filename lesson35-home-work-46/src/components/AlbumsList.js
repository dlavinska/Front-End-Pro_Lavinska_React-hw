import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const AlbumsList = () => {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
            const data = await response.json();
            setAlbums(data);
        }
        fetchAlbums()
    }, [userId]);
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>User albums:</h1>
                </div>
                {albums.map(album => (
                    <div key={album.id} className='col-4 mt-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{album.title}</h5>
                                <Link to={`/albums/${album.id}/photos`} className='btn btn-primary'>Photos</Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>        
    )
}

export default AlbumsList;