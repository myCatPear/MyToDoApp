import { GetTaskResponse, TaskType, UpdateTaskModelType } from './types';

import { ResponseType } from 'common/types/responseType/responseType';
import { apiConfig } from 'DAL';

export const taskApi = {
  getTasks(todoListID: string) {
    return apiConfig.get<GetTaskResponse>(`/todo-lists/${todoListID}/tasks`);
  },
  createTask(todoListID: string, title: string) {
    return apiConfig.post<ResponseType<{ item: TaskType }>>(
      `/todo-lists/${todoListID}/tasks`,
      { title },
    );
  },
  updateTask(todoListID: string, taskID: string, model: UpdateTaskModelType) {
    return apiConfig.put<ResponseType<{ item: TaskType }>>(
      `/todo-lists/${todoListID}/tasks/${taskID}`,
      model,
    );
  },
  deleteTask(todolistID: string, taskID: string) {
    return apiConfig.delete<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskID}`);
  },
};
