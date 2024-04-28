// src/store/reducers/todoReducer.ts
import { TodoState, TodoAction } from '../types';
import { ADD_TODO, DELETE_TODO, DELETE_PERMANENTLY } from '../utils/actionTypes';

const initialState: TodoState = {
    todos: [],
    deletedTodos: [],
};

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: Math.random().toString(36).substr(2, 9),
                text: action.payload.text,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
            };
        case DELETE_TODO:
            const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
            const deletedTodo = state.todos.find((todo) => todo.id === action.payload.id);
            return {
                ...state,
                todos: updatedTodos,
                deletedTodos: [...state.deletedTodos, deletedTodo!],
            };
        case DELETE_PERMANENTLY:
            const updatedDeletedTodosPermanently = state.deletedTodos.filter(
                (todo) => todo.id !== action.payload.id
            );
            return {
                ...state,
                deletedTodos: updatedDeletedTodosPermanently,
            };
        default:
            return state;
    }
};

export default todoReducer;
