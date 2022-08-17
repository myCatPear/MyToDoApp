import { AxiosError } from 'axios';

import { AppThunk } from './store';
import { setTodoListsACType, SET_TODOLIST } from './todolist-reducer';

import { taskApi } from 'DAL';
import { TaskType } from 'DAL/taskAPI/types';

const SET_TASKS = 'TASKS/SET_TASKS';

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

    default:
      return state;
  }
};

// ACTIONS

export type TaskActionsType = setTasksACType | setTodoListsACType;

export const setTasksAC = (todolistID: string, tasks: TaskType[]) =>
  ({ type: SET_TASKS, todolistID, tasks } as const);
type setTasksACType = ReturnType<typeof setTasksAC>;

// THUNK

export const getTasksTC =
  (todolistID: string): AppThunk =>
  dispatch => {
    taskApi
      .getTasks(todolistID)
      .then(res => {
        dispatch(setTasksAC(todolistID, res.data.items));
      })
      .catch((err: AxiosError<{ error: string }>) => {
        const error = err.response ? err.response.data.error : err.message;

        console.log('error: ', error);
      });
  };
