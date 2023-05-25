import React, { useState } from 'react';

const Form = ({ onSubmit, onToggle }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    }

    const changeSurname = (event) => {
        setSurname(event.target.value);
    }
    
    const changePhone = (event) => {
        setPhone(event.target.value);
    }
    
    const submitValues = (event) => {
        event.preventDefault();

        const value = {
            name,
            surname,
            phone
        }

        onSubmit(value);
        clearState();
    }

    const clearState = () => {
        setName('');
        setSurname('');
        setPhone('');
    }

    return (
        <form>
            <label>
                Name:
                <input type="text" value={name} onChange={changeName} />
            </label>

            <label>
                Surname:
                <input type="text" value={surname} onChange={changeSurname} />
            </label>
            
            <label>
                Phone:
                <input type="text" value={phone} onChange={changePhone} />
            </label>
            
            <div className='form-buttons'>
                <button className='form-btn-save' onClick={submitValues}>Save</button>
                <button className='form-btn-cancel' type='button' onClick={() => onToggle()}>Cancel</button>
            </div>            
        </form>
    )
}

export default Form;