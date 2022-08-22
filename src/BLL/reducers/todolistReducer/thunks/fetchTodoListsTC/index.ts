import { setTodoListsAC } from 'BLL/reducers/todolistReducer/actions';
import { AppThunk } from 'common/types';
import { todolistApi } from 'DAL';

export const fetchTodoListsTC = (): AppThunk => dispatch => {
  todolistApi.getTodoList().then(res => {
    dispatch(setTodoListsAC(res.data));

    return res.data;
  });
  // .then((todolists) => {
  //     todolists.forEach((tl) => {
  //         dispatch(getTasksTC(tl.id))
  //     })
  // })
};
