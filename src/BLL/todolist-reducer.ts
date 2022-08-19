import { setAppErrorAC, setAppStatusAC } from './app-reducer';
import { AppThunk } from './store';

import { todoListApi } from 'DAL';
import { TodoListType } from 'DAL/todolistAPI/types';

export const SET_TODOLIST = 'TODOLIST/SET_TODOLIST';
export const CREATE_TODOLIST = 'TODOLIST/CREATE_TODOLIST';
export const DELETE_TODOLIST = 'TODOLIST/DELETE_TODOLIST';

type InitialStateType = TodoListType[];

const initialState: InitialStateType = [];

export const todolistReducer = (
  state: InitialStateType = initialState,
  action: TodoListActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_TODOLIST:
      return [...action.todolists];
    case CREATE_TODOLIST:
      return [action.todolist, ...state];
    case DELETE_TODOLIST:
      return state.filter(todolist => todolist.id !== action.todolistID);
    default:
      return state;
  }
};

export type TodoListActionsType =
  | setTodoListsACType
  | createTodoListsACType
  | deleteTodoListsACType;

// ACTIONS

export const setTodoListsAC = (todolists: TodoListType[]) =>
  ({ type: SET_TODOLIST, todolists } as const);
export type setTodoListsACType = ReturnType<typeof setTodoListsAC>;

export const createTodoListsAC = (todolist: TodoListType) =>
  ({ type: CREATE_TODOLIST, todolist } as const);
export type createTodoListsACType = ReturnType<typeof createTodoListsAC>;

export const deleteTodoListsAC = (todolistID: string) =>
  ({ type: DELETE_TODOLIST, todolistID } as const);
export type deleteTodoListsACType = ReturnType<typeof deleteTodoListsAC>;
// THUNK

export const fetchTodoListsTC = (): AppThunk => dispatch => {
  todoListApi.getTodoList().then(res => {
    dispatch(setTodoListsAC(res.data));

    return res.data;
  });
  // .then((todolists) => {
  //     todolists.forEach((tl) => {
  //         dispatch(getTasksTC(tl.id))
  //     })
  // })
};

export const createTodolistTC =
  (title: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    todoListApi
      .createTodoList(title)
      .then(res => {
        dispatch(setAppStatusAC('succeed'));
        dispatch(createTodoListsAC(res.data.data.item));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message));
        dispatch(setAppStatusAC('failed'));
      });
  };

export const deleteTodolistTC =
  (todolistID: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    todoListApi
      .deleteTodoList(todolistID)
      .then(() => {
        dispatch(deleteTodoListsAC(todolistID));
        dispatch(setAppStatusAC('succeed'));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message));
        dispatch(setAppStatusAC('failed'));
      });
  };
