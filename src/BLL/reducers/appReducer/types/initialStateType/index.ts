import { AppRequestStatusType } from 'BLL/reducers/appReducer/types';
import { Nullable } from 'common/types';

export type InitialStateType = {
  status: AppRequestStatusType;
  error: Nullable<String>;
  isInitialized: boolean;
};
