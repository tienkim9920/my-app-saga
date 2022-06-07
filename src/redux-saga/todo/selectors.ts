import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.todo.pending;

const getTodos = (state: AppState) => state.todo.todos;

const getError = (state: AppState) => state.todo.error;

export const getTodosSelector = createSelector(getTodos, (todos: any) => todos);

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error: any) => error)