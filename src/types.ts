// src/types.ts
import {ADD_TODO, DELETE_PERMANENTLY, DELETE_TODO,} from "./utils/actionTypes";

export interface Todo {
    id: string;
    text: string;
}

export interface TodoState {
    todos: Todo[];
    deletedTodos: Todo[];
}

export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: {
        text: string;
    };
}

export interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: {
        id: string;
    };
}

export interface DeletePermanentlyAction {
    type: typeof DELETE_PERMANENTLY;
    payload: {
        id: string;
    };
}

export type TodoAction = AddTodoAction | DeleteTodoAction  | DeletePermanentlyAction;
