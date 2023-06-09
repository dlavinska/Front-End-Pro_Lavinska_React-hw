import { useState } from 'react';
import todo from '../data/TodoData.json';
import TodoListItem from './TodoListItem';
import CreateNewTodo from './CreateNewTodo'

const Todo = () => {
    const [todoList, setTodoList] = useState(todo);

    const handleCheck = (completed, id) => {
        const copyList = [...todoList];
        
        copyList.forEach((el) => {
            if (el.id === id) {
                el.completed = completed;
            }
        })

        setTodoList(copyList);
    }

    const addNewToDo = (newTodo) => {
        const copyList = [...todoList];

        copyList.push(newTodo);
        setTodoList(copyList);
    }


    const removeTodo = (id) => {
        const copyList = [...todoList].filter(item => item.id !== id);
        setTodoList(copyList);
    };
 
    return (
        <div>
            <div className='todo-wrap'>
                <h2>Todo List:</h2>
                <ul className='list-todo'>
                    {todoList.map((todo) => {
                        return <TodoListItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            handleCheck={handleCheck}
                            removeTodo={removeTodo}
                        />
                        
                    })}
                    
                </ul>

                <CreateNewTodo
                    addNewToDo={addNewToDo}
                />
            </div>
        </div>
    )
}

export default Todo;