import { setAppErrorAC, setAppStatusAC } from 'BLL/reducers/appReducer/actions';
import { setIsLoginInAC } from 'BLL/reducers/authReducer/actions';
import { REQUEST_TO_SERVER } from 'common/constants';
import { AppThunk } from 'common/types';
import { authApi } from 'DAL';

export const logoutTC = (): AppThunk => dispatch => {
  dispatch(setAppStatusAC(REQUEST_TO_SERVER));
  authApi
    .logout()
    .then(() => {
      dispatch(setIsLoginInAC(false));
      dispatch(setAppStatusAC('succeed'));
    })
    .catch(err => {
      dispatch(setAppErrorAC(err.message ? err.message : 'Some error occurred'));
      dispatch(setAppStatusAC('failed'));
    });
};
