import { SET_APP_ERROR } from 'BLL/reducers/appReducer';

export const setAppErrorAC = (error: string | null) =>
  ({ type: SET_APP_ERROR, error } as const);
