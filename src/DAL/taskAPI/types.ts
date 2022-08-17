export type TaskType = {
  description: string;
  title: string;
  completed: boolean;
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
  completed: boolean;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
};
