import { RootStateType } from 'BLL/store/types';

export const getIsInitialized = (state: RootStateType): boolean =>
  state.app.isInitialized;
