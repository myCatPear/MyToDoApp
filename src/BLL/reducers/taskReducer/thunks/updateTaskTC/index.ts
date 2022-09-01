import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { updateTasksAC } from 'BLL/reducers/taskReducer/actions';
import { UpdateDomainTaskModelType } from 'BLL/reducers/taskReducer/types';
import { RootStateType } from 'BLL/store/types';
import { REQUEST_TO_SERVER } from 'common/constants';
import { AppThunk } from 'common/types';
import { taskApi } from 'DAL';
import { UpdateTaskModelType } from 'DAL/taskAPI/types';

export const updateTaskTC =
  (
    todolistID: string,
    taskID: string,
    domainModel: UpdateDomainTaskModelType,
  ): AppThunk =>
  (dispatch, getState: () => RootStateType) => {
    dispatch(setAppStatusAC(REQUEST_TO_SERVER));
    const state = getState();
    const task = state.tasks[todolistID].find(task => task.id === taskID);

    if (!task) {
      dispatch(setAppErrorAC('Task does not exist'));

      return;
    }

    const apiModel: UpdateTaskModelType = {
      title: task.title,
      deadline: task.deadline,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
      status: task.status,
      ...domainModel,
    };

    taskApi
      .updateTask(todolistID, taskID, apiModel)
      .then(() => {
        dispatch(updateTasksAC(todolistID, taskID, apiModel));
        dispatch(setAppStatusAC('succeed'));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message ? err.message : 'Some error occurred'));
        dispatch(setAppStatusAC('failed'));
      });
  };
