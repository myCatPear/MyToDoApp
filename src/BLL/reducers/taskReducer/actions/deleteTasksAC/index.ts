import { DELETE_TASKS } from 'BLL/reducers/taskReducer';

export const deleteTasksAC = (todolistID: string, taskID: string) =>
  ({ type: DELETE_TASKS, todolistID, taskID } as const);
