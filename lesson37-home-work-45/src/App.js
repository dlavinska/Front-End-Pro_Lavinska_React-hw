import './App.css';
import CreateTodo from "./components/CreateTodo";
import TodoItem from "./components/TodoItem";
import {useDispatch, useSelector} from 'react-redux';
import { deleteAll } from './store/actions';
import Button from "./components/Button";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  return (
    <div className="todo-wrap">
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      
      <CreateTodo />
      
      <ul className='list-todo'>
        <TodoItem/>
      </ul>

      {todos.length > 1 && (
        <div className='delete-all-box'>
          <Button
            variant="danger"
            onClick={() => dispatch(deleteAll())}
            style = {{margin: '0 auto'}}
          >
            DELETE ALL
          </Button>
        </div>

      )}
    </div>
  );
}

export default App;
