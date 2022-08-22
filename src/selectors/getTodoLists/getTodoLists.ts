import { RootStateType } from 'BLL/store/types';
import { TodoListType } from 'DAL/todolistAPI/types';

export const getTodoLists = (state: RootStateType): TodoListType[] => state.todolists;
