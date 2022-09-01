import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { createTodoListAC } from 'BLL/reducers/todolistReducer/actions';
import { AppThunk } from 'common/types';
import { todolistApi } from 'DAL';

export const createTodolistTC =
  (title: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    todolistApi
      .createTodoList(title)
      .then(res => {
        dispatch(setAppStatusAC('succeed'));
        dispatch(createTodoListAC(res.data.data.item));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message ? err.message : 'Some error occurred'));
        dispatch(setAppStatusAC('failed'));
      });
  };
