import { TodolistsInitialStateType } from 'BLL/reducers/todolistReducer/types';
import { RootStateType } from 'BLL/store/types';

export const getTodoLists = (state: RootStateType): TodolistsInitialStateType[] =>
  state.todolists;
