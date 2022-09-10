import { AuthReducerActionsType, AuthInitialStateType } from './types';

export const SET_IS_LOGIN_IN = 'AUTH/SET_IS_LOGIN_IN';

const initialState: AuthInitialStateType = {
  isLoginIn: false,
};

export const authReducer = (
  state: AuthInitialStateType = initialState,
  action: AuthReducerActionsType,
): AuthInitialStateType => {
  switch (action.type) {
    case SET_IS_LOGIN_IN:
      return { ...state, isLoginIn: action.value };
    default:
      return state;
  }
};
