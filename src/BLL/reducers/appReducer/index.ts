import { AppReducerActionsType, InitialStateType } from './types';

export const SET_APP_STATUS = 'APP/SET_APP_REQUEST_STATUS';
export const SET_APP_ERROR = 'APP/SET_APP_ERROR';
export const SET_IS_INITIALIZED = 'APP/SET_IS_INITIALIZED';

const initialState: InitialStateType = {
  status: 'idle',
  error: null,
  isInitialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: AppReducerActionsType,
): InitialStateType => {
  switch (action.type) {
    case SET_APP_STATUS:
      return { ...state, status: action.status };
    case SET_APP_ERROR:
      return { ...state, error: action.error };
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: action.isInitialized };
    default:
      return state;
  }
};
