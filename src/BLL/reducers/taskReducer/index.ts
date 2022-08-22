import { InitialStateType, TaskReducerActionsType } from './types';

import {
  CREATE_TODOLIST,
  DELETE_TODOLIST,
  SET_TODOLIST,
} from 'BLL/reducers/todolistReducer';

export const SET_TASKS = 'TASKS/SET_TASKS';
export const CREATE_TASKS = 'TASKS/CREATE_TASKS';
export const DELETE_TASKS = 'TASKS/DELETE_TASKS';
export const UPDATE_TASKS = 'TASKS/UPDATE_TASKS';

const initialState: InitialStateType = {};

export const taskReducer = (
  state: InitialStateType = initialState,
  action: TaskReducerActionsType,
): InitialStateType => {
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
    case DELETE_TASKS:
      return {
        ...state,
        [action.todolistID]: state[action.todolistID].filter(
          task => task.id !== action.taskID,
        ),
      };
    case UPDATE_TASKS:
      return {
        ...state,
        [action.todolistID]: state[action.todolistID].map(task =>
          task.id === action.taskID ? { ...task, ...action.model } : task,
        ),
      };

    default:
      return state;
  }
};
