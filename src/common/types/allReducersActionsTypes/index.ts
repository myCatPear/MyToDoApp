import { AppReducerActionsType } from 'BLL/reducers/appReducer/types';
import { AuthReducerActionsType } from 'BLL/reducers/authReducer/types';
import { TaskReducerActionsType } from 'BLL/reducers/taskReducer/types';
import { TodoListReducerActionsType } from 'BLL/reducers/todolistReducer/types';

export type AllReducersActionsTypes =
  | AuthReducerActionsType
  | AppReducerActionsType
  | TodoListReducerActionsType
  | TaskReducerActionsType;
