import { ThunkAction } from 'redux-thunk';

import { RootStateType } from 'BLL/store/types';
import { AllReducersActionsTypes } from 'common/types/allReducersActionsTypes';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  AllReducersActionsTypes
>;
