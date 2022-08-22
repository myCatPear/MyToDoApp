import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { setIsLoginInAC } from 'BLL/reducers/authReducer/actions';
import { AppThunk } from 'common/types';
import { authApi } from 'DAL';

export const isInitializedTC = (): AppThunk => dispatch => {
  dispatch(setAppStatusAC('loading'));
  authApi
    .me()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setIsLoginInAC(true));
        dispatch(setAppStatusAC('succeed'));
      } else {
        dispatch(dispatch(setIsLoginInAC(false)));
        dispatch(setAppStatusAC('failed'));
      }
    })
    .catch(err => {
      dispatch(setAppErrorAC(err.message ? err.message : 'Some error occured'));
      dispatch(setAppStatusAC('failed'));
    });
};
