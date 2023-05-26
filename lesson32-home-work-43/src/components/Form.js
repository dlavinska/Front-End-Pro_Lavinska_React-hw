import React, { useState } from 'react';

const Form = ({ onSubmit, onCancel }) => {

    const getInitialState = () => ({
        name: '',
        surname: '',
        phone: ''
    });

    const [values, setValues] = useState(getInitialState);

    const handleChange = (event) => {
        setValues(state => ({
            ...state,
            [event.target.name]: event.target.value

        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values);
        setValues(getInitialState);
        clearState();
    }

    const clearState = () => {
        setValues('');
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={values.name} onChange={handleChange} />
            </label>

            <label>
                Surname:
                <input type="text" name="surname" value={values.surname} onChange={handleChange} />
            </label>
            
            <label>
                Phone:
                <input type="text" name="phone" value={values.phone} onChange={handleChange} />
            </label>
            
            <div className='form-buttons'>
                <button className='form-btn-save' type ="submit">Save</button>
                <button className='form-btn-cancel' type='button' onClick={() => onCancel()}>Cancel</button>
            </div>            
        </form>
    )
}

export default Form;