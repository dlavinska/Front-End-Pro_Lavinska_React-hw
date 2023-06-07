import {ADD_TODO, LOADING_TODOS_START, LOADING_TODOS_SUCCESS, LOADING_TODOS_FAILED, REMOVE_TODO, UPDATE_CHECKBOX, DELETE_ALL } from "./constants";
export const addNewToDo = (title) => {
    const newTodo = {
        id: Date.now(),
        title,
        completed: false
    };

    return {
        type: ADD_TODO,
        payload: newTodo
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

export const deleteAll = () =>{
    return {
        type: DELETE_ALL
    }
}

const BASE_ENDPOINT = "https://647d98a8af9847108549f46e.mockapi.io/todos";

export const loadTodos = () => {
  return (dispatch) => {
    fetch(BASE_ENDPOINT)
      .then((response) => {
       return response.json();
      })
      .then((data) => {
        dispatch(loadingTodosSucessAction(data.slice(0, 10)));
      })
      .catch ((error) => {
        dispatch(loadingTodosFailedAction(error));
      })
  }
}