import { UPDATE_TASKS } from 'BLL/reducers/taskReducer';
import { UpdateTaskModelType } from 'DAL/taskAPI/types';

export const updateTasksAC = (
  todolistID: string,
  taskID: string,
  model: UpdateTaskModelType,
) => ({ type: UPDATE_TASKS, todolistID, taskID, model } as const);
