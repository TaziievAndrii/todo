// src/store/actions/todoActions.ts
import { ADD_TODO, DELETE_TODO, DELETE_PERMANENTLY } from '../../utils/actionTypes';

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        text,
    },
});

export const deleteTodo = (id: string) => ({
    type: DELETE_TODO,
    payload: {
        id,
    },
});
export const deletePermanently = (id: string) => ({
    type: DELETE_PERMANENTLY,
    payload: {
        id,
    },
});
