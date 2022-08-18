import { AppRequestStatusType } from 'BLL/app-reducer';
import { RootStateType } from 'BLL/store';

export const getAppStatus = (state: RootStateType): AppRequestStatusType =>
  state.app.status;
