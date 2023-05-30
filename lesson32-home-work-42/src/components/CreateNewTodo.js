import { useState } from 'react';
import Button from "./Button";

const CreateNewTodo = ({ addNewToDo, newTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const getValue = () => {
        if (!inputValue) {
            return;
        } else {
            addNewToDo(newTodo = ({
                "userId": 1,
                "id": Math.random(),
                "title": inputValue,
                "completed": false
            }))
        }

        setInputValue('');
    }

    return (
        <div>
            <input className='todo-value' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <Button addNewToDo={() => getValue()} title={'Add task'} />
        </div>
    )

}

export default CreateNewTodo;