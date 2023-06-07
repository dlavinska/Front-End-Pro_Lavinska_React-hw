import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { loadTodos, handleCheck, removeTodo} from '../store/actions';
import Button from "./Button";


const TodoItem = () => {
    const todos = useSelector(state => state.todos.todos);
    const loading = useSelector(state => state.todos.loading);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch])

    return (
        <div>
            
            {loading && <div>loading...</div>}
        
            {todos.map((todo) => (
                <li key={todo.id}>
                    
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(handleCheck(todo.id))}
                    />   
                    <span>{todo.title}</span>
                    <div className='btn-box' key={todo.id}>
                        <Button
                            variant="danger"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            X
                        </Button>
                    </div>
                
                </li>
            ))}

        </div>
    )
        
}

export default TodoItem;