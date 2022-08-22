import { CreateTasksACType } from 'BLL/reducers/taskReducer/types/createTasksACType';
import { DeleteTasksACType } from 'BLL/reducers/taskReducer/types/deleteTasksACType';
import { SetTasksACType } from 'BLL/reducers/taskReducer/types/setTasksACType';
import { UpdateTasksACType } from 'BLL/reducers/taskReducer/types/updateTasksACType';
import {
  CreateTodoListsACType,
  DeleteTodoListsACType,
  SetTodoListsACType,
} from 'BLL/reducers/todolistReducer/types';

export type TaskReducerActionsType =
  | SetTasksACType
  | SetTodoListsACType
  | CreateTodoListsACType
  | DeleteTodoListsACType
  | CreateTasksACType
  | DeleteTasksACType
  | UpdateTasksACType;
