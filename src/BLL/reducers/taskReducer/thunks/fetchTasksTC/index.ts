import { AxiosError } from 'axios';

import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { setTasksAC } from 'BLL/reducers/taskReducer/actions';
import { AppThunk } from 'common/types';
import { taskApi } from 'DAL';

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
      .catch(err => {
        dispatch(setAppErrorAC(err.message ? err.message : 'Some error occurred'));
        dispatch(setAppStatusAC('failed'));
      });
  };
