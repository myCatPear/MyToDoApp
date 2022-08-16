import { AppThunk } from './store';

import { todoListApi, TodoListType } from 'DAL/todolist-api';

export const SET_TODOLIST = 'TODOLIST/SET_TODOLIST';

type InitialStateType = TodoListType[];

const initialState: InitialStateType = [];

export const todolistReducer = (
  state: InitialStateType = initialState,
  action: TodoListActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_TODOLIST:
      return [...action.todolists];
    default:
      return state;
  }
};

export type TodoListActionsType = setTodoListsACType;

// ACTIONS

export const setTodoListsAC = (todolists: TodoListType[]) =>
  ({ type: SET_TODOLIST, todolists } as const);
export type setTodoListsACType = ReturnType<typeof setTodoListsAC>;

// THUNK

export const getTodoListsTC = (): AppThunk => dispatch => {
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
