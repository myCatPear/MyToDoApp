import { TodoListType } from './types';

import { apiConfig } from 'DAL';
import { ResponseType } from 'DAL/types';

export const todoListApi = {
  getTodoList() {
    return apiConfig.get<TodoListType[]>('/todo-lists');
  },
  createTodoList(title: string) {
    return apiConfig.post<ResponseType<{ item: TodoListType }>>('/todo-lists', { title });
  },
  deleteTodoList(todoListID: string) {
    return apiConfig.delete<ResponseType>(`/todo-lists/${todoListID}`);
  },
  updateTodoListTitle(todoListID: string, title: string) {
    return apiConfig.put<ResponseType>(`/todo-lists/${todoListID}`, { title });
  },
};
