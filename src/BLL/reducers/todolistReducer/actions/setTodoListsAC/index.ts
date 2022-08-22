import { SET_TODOLIST } from 'BLL/reducers/todolistReducer';
import { TodoListType } from 'DAL/todolistAPI/types';

export const setTodoListsAC = (todolists: TodoListType[]) =>
  ({ type: SET_TODOLIST, todolists } as const);
