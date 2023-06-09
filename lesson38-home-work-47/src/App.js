import './App.css';
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../src/store/actions';
import React, { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.todos.loading);

    useEffect(() => {
      dispatch(getTodos());
    }, [dispatch])  

  return (
    <div className="todo-wrap">
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>

      {loading && <div>loading...</div>}

      <CreateTodo />

      <ul className='list-todo'>
        <TodoItem />
      </ul>

    </div>
  );
}

export default App;
