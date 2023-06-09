import {ADD_TODO, LOADING_TODOS_START, LOADING_TODOS_SUCCESS, LOADING_TODOS_FAILED, REMOVE_TODO, UPDATE_CHECKBOX} from "./constants";
import axios from 'axios';

export const addNewToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const loadingTodosStartAction = () => {
    return {
        type: LOADING_TODOS_START
    }
}

export const loadingTodosSucessAction = (todos) => {
    return {
        type: LOADING_TODOS_SUCCESS,
        payload: todos
    }
}

export const loadingTodosFailedAction = (error) => {
    return {
        type: LOADING_TODOS_FAILED,
        payload: error
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const handleCheck = (id) => {
    return {
        type: UPDATE_CHECKBOX,
        payload: id
    }
}

const BASE_ENDPOINT = "https://647d98a8af9847108549f46e.mockapi.io/todos";
const handleError = error => console.log("Error with data", error);

export const getTodos = () => {
  return dispatch => {
    axios
      .get(`${BASE_ENDPOINT}`)
      .then(response => {
        dispatch(loadingTodosSucessAction(response.data));
      })
      .catch(loadingTodosFailedAction(handleError));
  };
  
};

export const addTodo = (title) => {
  return dispatch => {
    axios
      .post(`${BASE_ENDPOINT}`, {title, completed: false})
      .then(response => {
        dispatch(addNewToDo(response.data));
      })
      .catch(loadingTodosFailedAction(handleError));
  };
};

export const toggleTodo = (id) => {
  return dispatch => {
    axios
      .put(`${BASE_ENDPOINT}/${id}`, {completed: true})
      .then(
        dispatch(handleCheck(id))
      )
      .catch(loadingTodosFailedAction(handleError));
  };
};

export const deleteTodo = (id) => {
  return dispatch => {
    axios
      .delete(`${BASE_ENDPOINT}/${id}`)
      .then(
        dispatch(removeTodo(id))
      )
      .catch(loadingTodosFailedAction(handleError));
  };
};