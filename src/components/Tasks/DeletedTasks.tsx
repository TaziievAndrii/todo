// src/components/DeletedList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deletePermanently } from '../../store/actions/todoActions';
import TodoItem from './TodoItem';

const DeletedList: React.FC = () => {
    const deletedTodos = useSelector((state: RootState) => state.todo.deletedTodos);
    const dispatch = useDispatch();

    const handleDeletePermanently = (id: string) => {
        dispatch(deletePermanently(id));
    };

    return (
        <div>
            <h2>Deleted Tasks</h2>
            <ul>
                {deletedTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDeletePermanently}
                        permanently={true}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DeletedList;
