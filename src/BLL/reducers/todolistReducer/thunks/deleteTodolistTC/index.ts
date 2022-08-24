import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { deleteTodoListAC } from 'BLL/reducers/todolistReducer/actions';
import { AppThunk } from 'common/types';
import { todolistApi } from 'DAL';

export const deleteTodolistTC =
  (todolistID: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    todolistApi
      .deleteTodoList(todolistID)
      .then(() => {
        dispatch(deleteTodoListAC(todolistID));
        dispatch(setAppStatusAC('succeed'));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message));
        dispatch(setAppStatusAC('failed'));
      });
  };
