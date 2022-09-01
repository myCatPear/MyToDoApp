import { FilterTaskType } from 'common/types';
import { TodoListType } from 'DAL/todolistAPI/types';

export type TodolistsInitialStateType = TodoListType & {
  filter: FilterTaskType;
};
