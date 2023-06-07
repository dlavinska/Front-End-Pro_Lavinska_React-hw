import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, handleCheck } from '../store/actions';
import Button from "./Button";

const TodoItem = () => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.operationsReducer);
    
    return (
        todos.map((todo) => (
            <li key={todo.id}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(handleCheck(todo.id))}
                />
                <span>{todo.title}</span>
                <div className='btn-box'>
                    <Button variant = "danger" onClick={()=>dispatch(removeTodo(todo.id))}>X</Button>
                </div>
                
            </li>
        ))
    )

}

export default TodoItem;