import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { updateTodoListTitleAC } from 'BLL/reducers/todolistReducer/actions';
import { REQUEST_TO_SERVER } from 'common/constants';
import { AppThunk } from 'common/types';
import { todolistApi } from 'DAL';

export const updateTodolistTitleTC =
  (todolistID: string, newTitle: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC(REQUEST_TO_SERVER));
    todolistApi
      .updateTodoListTitle(todolistID, newTitle)
      .then(() => {
        dispatch(updateTodoListTitleAC(todolistID, newTitle));
        dispatch(setAppStatusAC('succeed'));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message ? err.message : 'Some error occurred'));
        dispatch(setAppStatusAC('failed'));
      });
  };
