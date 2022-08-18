import { TasksStateType } from '../../BLL/task-reducer';

import { RootStateType } from 'BLL/store';

export const getTasks = (state: RootStateType): TasksStateType => state.tasks;
