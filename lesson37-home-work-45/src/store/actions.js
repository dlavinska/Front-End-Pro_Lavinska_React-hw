import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX, DELETE_ALL } from "./constants";

export const addNewToDo = (payload) => {
    return{
        type: ADD_TODO,
        payload
    }
}

export const deleteAll = () =>{
    return{
        type: DELETE_ALL
    }
}

export const removeTodo = (payload) => {
    return{
        type: REMOVE_TODO,
        payload
    }
}

export const handleCheck = (payload) => {
    return {
        type: UPDATE_CHECKBOX,
        payload
    }
}