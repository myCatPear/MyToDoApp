import { CHANGE_TODOLIST_FILTER } from 'BLL/reducers/todolistReducer';
import { FilterTaskType } from 'common/types';

export const changeTodolistFilterAC = (todolistID: string, filter: FilterTaskType) =>
  ({
    type: CHANGE_TODOLIST_FILTER,
    todolistID,
    filter,
  } as const);
