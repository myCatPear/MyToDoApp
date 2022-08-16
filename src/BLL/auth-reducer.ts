import { setAppStatusAC, setAppErrorAC } from './app-reducer';
import { AppThunk } from './store';

import { authAPI } from 'DAL/auth-api';
import { LoginParamsType } from 'DAL/todolist-api';

const SET_IS_LOGIN_IN = 'AUTH/SET_IS_LOGIN_IN';

const initialState = {
  isLoginIn: false,
};

type InitialStateType = {
  isLoginIn: boolean;
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_IS_LOGIN_IN:
      return { ...state, isLoginIn: action.value };
    default:
      return state;
  }
};

export type AuthActionsType = setIsLoginInACType;

export const setIsLoginInAC = (value: boolean) =>
  ({ type: SET_IS_LOGIN_IN, value } as const);

type setIsLoginInACType = ReturnType<typeof setIsLoginInAC>;

export const loginTC =
  (data: LoginParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    authAPI
      .login(data)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setIsLoginInAC(true));
          dispatch(setAppStatusAC('succeed'));
        } else if (res.data.messages) {
          dispatch(setAppErrorAC(res.data.messages[0]));
        } else {
          dispatch(setAppErrorAC('Some error occured'));
        }
        dispatch(setAppStatusAC('idle'));
      })
      .catch(err => {
        dispatch(setAppErrorAC(err.message ? err.message : 'Some error occured'));
        dispatch(setAppStatusAC('failed'));
      });
  };
