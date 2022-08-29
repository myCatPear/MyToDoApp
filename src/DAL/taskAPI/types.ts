import { TaskStatus } from 'common/enum';

export type TaskType = {
  description: string;
  title: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};

export type GetTaskResponse = {
  items: TaskType[];
  totalCount: number;
  error: string;
};

export type UpdateTaskModelType = {
  title: string;
  description: string;
  status: TaskStatus;
  priority: number;
  startDate: string;
  deadline: string;
};
