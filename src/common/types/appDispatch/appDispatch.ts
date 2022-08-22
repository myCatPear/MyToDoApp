import { ThunkDispatch } from 'redux-thunk';

import { RootStateType } from 'BLL/store/types';
import { AllReducersActionsTypes } from 'common/types/allReducersActionsTypes';

export type AppDispatch = ThunkDispatch<RootStateType, unknown, AllReducersActionsTypes>;
