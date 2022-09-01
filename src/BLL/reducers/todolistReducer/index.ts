import { TodolistsInitialStateType, TodoListReducerActionsType } from './types';

export const SET_TODOLIST = 'TODOLIST/SET_TODOLIST';
export const CREATE_TODOLIST = 'TODOLIST/CREATE_TODOLIST';
export const DELETE_TODOLIST = 'TODOLIST/DELETE_TODOLIST';
export const UPDATE_TODOLIST = 'TODOLIST/UPDATE_TODOLIST';
export const CHANGE_TODOLIST_FILTER = 'TODOLIST/CHANGE_TODOLIST_FILTER';
export const CLEAR_DATA = 'TODOLIST/CHANGE_TODOLIST_FILTER';

const initialState: TodolistsInitialStateType[] = [];

export const todolistReducer = (
  state: TodolistsInitialStateType[] = initialState,
  action: TodoListReducerActionsType,
): TodolistsInitialStateType[] => {
  switch (action.type) {
    case SET_TODOLIST:
      return action.todolists.map(tl => ({ ...tl, filter: 'All' }));
    case CREATE_TODOLIST:
      return [{ ...action.todolist, filter: 'All' }, ...state];
    case DELETE_TODOLIST:
      return state.filter(todolist => todolist.id !== action.todolistID);
    case UPDATE_TODOLIST:
      return state.map(todolists =>
        todolists.id === action.todolistID
          ? { ...todolists, title: action.newTitle }
          : todolists,
      );
    case CHANGE_TODOLIST_FILTER:
      return state.map(todolist =>
        todolist.id === action.todolistID
          ? { ...todolist, filter: action.filter }
          : todolist,
      );
    default:
      return state;
  }
};
