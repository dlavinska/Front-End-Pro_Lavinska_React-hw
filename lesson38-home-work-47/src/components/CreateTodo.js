import { useState } from 'react';
import Button from "./Button";
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

const CreateTodo = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue));
        setInputValue('');
    }

    return (
        <>
            <form className='form-group custom-form' onSubmit={handleSubmit}>
                <label>Add your todo-items</label>
                <div className='input-box'>
                    <input type="text"
                        className='form-control'
                        required
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className='box-add-btn'>
                        <Button type = "submit" variant = "primary">ADD</Button>
                    </div>
                    
                </div>
           </form>            
        </>
    )
}

export default CreateTodo;