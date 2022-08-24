import { CREATE_TODOLIST } from 'BLL/reducers/todolistReducer';
import { TodoListType } from 'DAL/todolistAPI/types';

export const createTodoListAC = (todolist: TodoListType) =>
  ({ type: CREATE_TODOLIST, todolist } as const);
