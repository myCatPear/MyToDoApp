import { useDispatch } from 'react-redux';

import { AppDispatch } from 'BLL/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
