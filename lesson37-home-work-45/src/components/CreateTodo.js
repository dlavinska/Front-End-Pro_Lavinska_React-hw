import { useState } from 'react';
import Button from "./Button";
import { useDispatch } from 'react-redux';
import { addNewToDo} from '../store/actions';

const CreateTodo = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            userId: 1,
            id: Date.now(),
            title: inputValue,
            completed: false
        }

        setInputValue('');
        dispatch(addNewToDo(newTodo));
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