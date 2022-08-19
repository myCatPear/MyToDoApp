import { AxiosError } from 'axios';

import { setAppErrorAC, setAppStatusAC } from './app-reducer';
import { AppThunk } from './store';
import {
  CREATE_TODOLIST,
  createTodoListsACType,
  DELETE_TODOLIST,
  deleteTodoListsACType,
  SET_TODOLIST,
  setTodoListsACType,
} from './todolist-reducer';

import { taskApi } from 'DAL';
import { TaskType } from 'DAL/taskAPI/types';

const SET_TASKS = 'TASKS/SET_TASKS';
const CREATE_TASKS = 'TASKS/CREATE_TASKS';

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};

const initialState: TasksStateType = {};

export const taskReducer = (
  state: TasksStateType = initialState,
  action: TaskActionsType,
): TasksStateType => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, [action.todolistID]: action.tasks };
    case SET_TODOLIST: {
      const copyState = { ...state };

      action.todolists.forEach(tl => {
        copyState[tl.id] = [];
      });

      return copyState;
    }
    case CREATE_TODOLIST:
      return { ...state, [action.todolist.id]: [] };
    case DELETE_TODOLIST: {
      const copyState = { ...state };

      delete copyState[action.todolistID];

      return copyState;
    }
    case CREATE_TASKS:
      return {
        ...state,
        [action.todolistID]: [action.task, ...state[action.todolistID]],
      };

    default:
      return state;
  }
};

export type TaskActionsType =
  | setTasksACType
  | setTodoListsACType
  | createTodoListsACType
  | deleteTodoListsACType
  | createTasksACType;

// ACTIONS

export const setTasksAC = (todolistID: string, tasks: TaskType[]) =>
  ({ type: SET_TASKS, todolistID, tasks } as const);
type setTasksACType = ReturnType<typeof setTasksAC>;

export const createTasksAC = (todolistID: string, task: TaskType) =>
  ({ type: CREATE_TASKS, todolistID, task } as const);
type createTasksACType = ReturnType<typeof createTasksAC>;

// THUNK

export const fetchTasksTC =
  (todolistID: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    taskApi
      .getTasks(todolistID)
      .then(res => {
        dispatch(setTasksAC(todolistID, res.data.items));
        dispatch(setAppStatusAC('succeed'));
      })
      .catch((err: AxiosError<{ error: string }>) => {
        const error = err.response ? err.response.data.error : err.message;

        dispatch(setAppErrorAC(error));
        dispatch(setAppStatusAC('failed'));
      });
  };

export const createTaskTC =
  (todolistID: string, title: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    taskApi
      .createTask(todolistID, title)
      .then(task => {
        dispatch(createTasksAC(todolistID, task.data.data.item));
        dispatch(setAppStatusAC('succeed'));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message));
        dispatch(setAppStatusAC('failed'));
      });
  };
