import { AuthReducerActionsType, InitialStateType } from './types';

export const SET_IS_LOGIN_IN = 'AUTH/SET_IS_LOGIN_IN';

const initialState = {
  isLoginIn: false,
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthReducerActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_IS_LOGIN_IN:
      return { ...state, isLoginIn: action.value };
    default:
      return state;
  }
};
