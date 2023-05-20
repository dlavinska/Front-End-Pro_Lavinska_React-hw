import { useState } from 'react';
import Button from "./Button";

const CreateNewTodo = ({ handleClickFunc }) => {
    const [inputValue, setInputValue] = useState('');

    const getValue = () => {
        if (!inputValue) {
            return;
        }

        handleClickFunc(inputValue);
        setInputValue('');
    }

    return (
        <div>
            <input className='todo-value' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <Button handleClickFunc={() => getValue()} title={'Add task'} />
        </div>
    )

}

export default CreateNewTodo;