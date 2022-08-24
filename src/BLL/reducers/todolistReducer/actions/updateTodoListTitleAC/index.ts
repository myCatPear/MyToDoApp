import { UPDATE_TODOLIST } from 'BLL/reducers/todolistReducer';

export const updateTodoListTitleAC = (todolistID: string, newTitle: string) =>
  ({ type: UPDATE_TODOLIST, todolistID, newTitle } as const);
