import { InitialStateType } from 'BLL/reducers/taskReducer/types';
import { RootStateType } from 'BLL/store/types';

export const getTasks = (state: RootStateType): InitialStateType => state.tasks;
