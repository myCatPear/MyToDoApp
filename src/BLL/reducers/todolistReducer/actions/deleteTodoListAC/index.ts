import { DELETE_TODOLIST } from 'BLL/reducers/todolistReducer';

export const deleteTodoListAC = (todolistID: string) =>
  ({ type: DELETE_TODOLIST, todolistID } as const);
