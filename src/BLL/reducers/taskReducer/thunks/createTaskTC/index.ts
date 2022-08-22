import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { createTasksAC } from 'BLL/reducers/taskReducer/actions';
import { AppThunk } from 'common/types';
import { taskApi } from 'DAL';

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
