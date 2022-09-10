import { SET_IS_INITIALIZED } from 'BLL/reducers/appReducer';

export const setIsInitializedAC = (isInitialized: boolean) =>
  ({ type: SET_IS_INITIALIZED, isInitialized } as const);
