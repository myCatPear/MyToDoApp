import { InitialStateType, TodoListReducerActionsType } from './types';

export const SET_TODOLIST = 'TODOLIST/SET_TODOLIST';
export const CREATE_TODOLIST = 'TODOLIST/CREATE_TODOLIST';
export const DELETE_TODOLIST = 'TODOLIST/DELETE_TODOLIST';
export const UPDATE_TODOLIST = 'TODOLIST/UPDATE_TODOLIST';

const initialState: InitialStateType = [];

export const todolistReducer = (
  state: InitialStateType = initialState,
  action: TodoListReducerActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_TODOLIST:
      return [...action.todolists];
    case CREATE_TODOLIST:
      return [action.todolist, ...state];
    case DELETE_TODOLIST:
      return state.filter(todolist => todolist.id !== action.todolistID);
    case UPDATE_TODOLIST:
      return state.map(todolists =>
        todolists.id === action.todolistID
          ? { ...todolists, title: action.newTitle }
          : todolists,
      );
    default:
      return state;
  }
};
