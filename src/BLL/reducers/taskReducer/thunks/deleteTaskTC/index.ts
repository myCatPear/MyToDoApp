import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { deleteTasksAC } from 'BLL/reducers/taskReducer/actions';
import { REQUEST_TO_SERVER } from 'common/constants';
import { AppThunk } from 'common/types';
import { taskApi } from 'DAL';

export const deleteTaskTC =
  (todolistID: string, taskID: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC(REQUEST_TO_SERVER));
    taskApi
      .deleteTask(todolistID, taskID)
      .then(() => {
        dispatch(deleteTasksAC(todolistID, taskID));
        dispatch(setAppStatusAC('idle'));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message));
      });
  };
