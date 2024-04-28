// src/components/TodoItem.tsx
import React from 'react';
import { Todo } from '../../types';

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: string) => void;
    permanently?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete ,permanently = false}) => {
    const handleDelete = () => {
        onDelete(todo.id);
    };

    return (
        <li className={`todo-item`}>
            <span>{todo.text}</span>
            <button className={`button button-delete`} onClick={handleDelete}>{ `Delete ${!permanently ? '' : 'permanently'}` }</button>
        </li>
    );
};

export default TodoItem;
