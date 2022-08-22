import { TaskType } from 'DAL/taskAPI/types';

export type InitialStateType = {
  [key: string]: Array<TaskType>;
};
