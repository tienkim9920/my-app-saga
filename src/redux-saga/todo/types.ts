import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
} from "./actionTypes";

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoState {
    pending: boolean;
    todos: ITodo[];
    error: string | null;
}

export interface FetchTodoSuccessPayload {
    todos: ITodo[];
}

export interface FetchTodoFailurePayload {
    error: string;
}

export interface FetchTodoRequest {
    type: typeof FETCH_TODO_REQUEST;
}

export type FetchTodoSuccess = {
    type: typeof FETCH_TODO_SUCCESS;
    payload: FetchTodoSuccessPayload;
};

export type FetchTodoFailure = {
    type: typeof FETCH_TODO_FAILURE;
    payload: FetchTodoFailurePayload;
};

export type TodoActions =
    | FetchTodoRequest
    | FetchTodoSuccess
    | FetchTodoFailure;