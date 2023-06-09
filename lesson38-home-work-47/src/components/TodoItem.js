import {useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo} from '../store/actions';
import Button from "./Button";


const TodoItem = () => {
    const todos = useSelector(state => state.todos.todos);

    const dispatch = useDispatch();
    
    return (
        <div>
            
            {todos.map((todo) => (
                <li key={todo.id}>
                    
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />   
                    <span>{todo.title}</span>
                    <div className='btn-box' key={todo.id}>
                        <Button
                            variant="danger"
                            onClick={() => dispatch(deleteTodo(todo.id))}
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