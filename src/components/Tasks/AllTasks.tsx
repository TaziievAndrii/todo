// src/components/TodoList.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { addTodo, deleteTodo } from '../../store/actions/todoActions';

import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (text.trim() !== '') {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <h2>All Tasks</h2>
            <form>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter todo..."
                />
                <button className={`button`} onClick={(e) => handleAddTodo(e)}>Add Tasks</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDeleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
