import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX, DELETE_ALL } from "./constants";

const initialState = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        completed: true
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: "magnam facilis autem",
        completed: true
    }
];

export const operationsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload);
            return filteredTodos;
        case UPDATE_CHECKBOX:
            const todoListArray = [];
            
            // eslint-disable-next-line
            state.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed;
                } 

                todoListArray.push(item);
                
            })

            return todoListArray;
  
        default: return state;
    }
}