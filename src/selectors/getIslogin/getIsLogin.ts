import { RootStateType } from 'BLL/store/types';

export const getIsLogin = (state: RootStateType): boolean => state.auth.isLoginIn;
