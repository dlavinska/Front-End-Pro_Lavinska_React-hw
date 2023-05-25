import React, { useState} from 'react';
import Form from './Form';
import jsonData from '../data/userData.json';

const ContactsTable = () => {
    const [contactsData, setContactsData] = useState(jsonData);
    const [showForm, setShowForm] = useState(false);

    const handleDelete = id => {
        const updatedContacts = contactsData.filter(contact => contact.id !== id);
        setContactsData(updatedContacts);
    }

    const tableRows = contactsData.map((info) => {
        return (
            <tr key={info.id}>
                <td>{info.name}</td>
                <td>{info.surname}</td>
                <td>{info.phone}</td>
                <td>
                    <button className='remove-btn' onClick={() => handleDelete(info.id)}>Delete</button>
                </td>
            </tr>
        )
    })

    const handleSave = (data) => {
        data.id = Date.now();
        const updatedContactsData = [...contactsData];
        updatedContactsData.push(data);
        setContactsData(updatedContactsData);
    }

    const handleCancel = () => {
        setShowForm(false);
    }

    return (
        <div className='table-box'>
            <h1>Contacts Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>

            {!showForm && (
                <button className='add-btn' onClick={() => setShowForm(true)}>Add contact</button>
            )}

            {showForm && (
                <Form onSubmit={handleSave} onToggle = {handleCancel} />
            )}

        </div>
    )
}

export default ContactsTable;