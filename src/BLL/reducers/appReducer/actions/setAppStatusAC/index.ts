import { SET_APP_STATUS } from 'BLL/reducers/appReducer';
import { AppRequestStatusType } from 'BLL/reducers/appReducer/types';

export const setAppStatusAC = (status: AppRequestStatusType) =>
  ({ type: SET_APP_STATUS, status } as const);
