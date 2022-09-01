import { setAppErrorAC, setAppStatusAC } from '../../../appReducer/actions';

import { setTodoListsAC } from 'BLL/reducers/todolistReducer/actions';
import { AppThunk } from 'common/types';
import { todolistApi } from 'DAL';

export const fetchTodoListsTC = (): AppThunk => dispatch => {
  todolistApi
    .getTodoList()
    .then(res => {
      dispatch(setTodoListsAC(res.data));

      return res.data;
    })
    .catch(err => {
      dispatch(setAppErrorAC(err.message ? err.message : 'Some error occurred'));
      dispatch(setAppStatusAC('failed'));
    });
  // .then((todolists) => {
  //     todolists.forEach((tl) => {
  //         dispatch(getTasksTC(tl.id))
  //     })
  // })
};
