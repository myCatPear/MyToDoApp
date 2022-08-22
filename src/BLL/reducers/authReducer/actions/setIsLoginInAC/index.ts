import { SET_IS_LOGIN_IN } from 'BLL/reducers/authReducer';

export const setIsLoginInAC = (value: boolean) =>
  ({ type: SET_IS_LOGIN_IN, value } as const);
