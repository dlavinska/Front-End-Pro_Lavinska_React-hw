import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        }
        fetchUsers()
    }, []);
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Users-list:</h1>
                </div>
                {users.map(user => (
                    <div key={user.id} className='col-4 mt-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{user.name}</h5>
                                <p className='card-text'>Email: {user.email} </p>
                                <p className='card-text'>Phone: {user.phone} </p>
                                <Link to={`/users/${user.id}/albums`} className='btn btn-primary'>Album</Link>
                            </div>
                        </div>

                    </div>
                ))}
                
            </div>
        </div>        
    )
}

export default UsersList;