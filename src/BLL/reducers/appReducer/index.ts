import { AppReducerActionsType, InitialStateType } from './types';

export const SET_APP_STATUS = 'APP/SET_APP_REQUEST_STATUS';
export const SET_APP_ERROR = 'APP/SET_APP_ERROR';

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
    default:
      return state;
  }
};
