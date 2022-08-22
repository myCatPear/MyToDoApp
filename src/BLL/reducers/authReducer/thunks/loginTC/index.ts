import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { setIsLoginInAC } from 'BLL/reducers/authReducer/actions';
import { REQUEST_TO_SERVER } from 'common/constants';
import { AppThunk } from 'common/types';
import { authApi } from 'DAL';
import { LoginParamsType } from 'DAL/authAPI/types';

export const loginTC =
  (data: LoginParamsType): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC(REQUEST_TO_SERVER));
    authApi
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
