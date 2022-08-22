import { Nullable } from 'common/types';
import { AppRequestStatusType } from 'BLL/reducers/appReducer/types';

export type InitialStateType = {
  status: AppRequestStatusType;
  error: Nullable<String>;
  isInitialized: boolean;
};
