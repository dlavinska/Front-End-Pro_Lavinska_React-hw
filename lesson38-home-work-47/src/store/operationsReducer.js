import { ADD_TODO, LOADING_TODOS_START, LOADING_TODOS_SUCCESS, LOADING_TODOS_FAILED, REMOVE_TODO, UPDATE_CHECKBOX } from "./constants";

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        
        case LOADING_TODOS_START:
            return {
                ...state,
                loading: true
            }
        
        case LOADING_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        
        case LOADING_TODOS_FAILED:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        
        case UPDATE_CHECKBOX:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.payload) {
                        item.completed = !item.completed;
                    }
                    return item;
                })
            }
        
        default:
            return state;

    }
}