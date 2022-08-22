import { AppRequestStatusType } from 'BLL/reducers/appReducer/types';
import { RootStateType } from 'BLL/store/types';

export const getAppStatus = (state: RootStateType): AppRequestStatusType =>
  state.app.status;
