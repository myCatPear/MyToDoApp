import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootStateType } from 'BLL/store';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
