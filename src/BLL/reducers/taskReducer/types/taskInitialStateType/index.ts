import { TaskType } from 'DAL/taskAPI/types';

export type TaskInitialStateType = {
  [key: string]: Array<TaskType>;
};
