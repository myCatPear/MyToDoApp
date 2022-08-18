import { RootStateType } from '../../BLL/store';

export const getIsLogin = (state: RootStateType): boolean => state.auth.isLoginIn;
