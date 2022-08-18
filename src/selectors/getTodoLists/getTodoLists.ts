import { TodoListType } from '../../DAL/todolistAPI/types';

import { RootStateType } from 'BLL/store';

export const getTodoLists = (state: RootStateType): TodoListType[] => state.todolists;
