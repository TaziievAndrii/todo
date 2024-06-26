// src/store/index.ts
import { combineReducers, createStore } from 'redux';
import todoReducer from '../reducers/todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
