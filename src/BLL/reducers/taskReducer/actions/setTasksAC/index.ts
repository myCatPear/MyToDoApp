import { SET_TASKS } from 'BLL/reducers/taskReducer';
import { TaskType } from 'DAL/taskAPI/types';

export const setTasksAC = (todolistID: string, tasks: TaskType[]) =>
  ({ type: SET_TASKS, todolistID, tasks } as const);
