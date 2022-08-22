import { CREATE_TASKS } from 'BLL/reducers/taskReducer';
import { TaskType } from 'DAL/taskAPI/types';

export const createTasksAC = (todolistID: string, task: TaskType) =>
  ({ type: CREATE_TASKS, todolistID, task } as const);
