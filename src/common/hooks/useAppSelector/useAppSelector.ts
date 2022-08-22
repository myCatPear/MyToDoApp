import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootStateType } from 'BLL/store/types';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
