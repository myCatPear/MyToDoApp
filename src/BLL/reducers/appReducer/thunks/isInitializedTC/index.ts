import {
  setAppErrorAC,
  setAppStatusAC,
  setIsInitializedAC,
} from 'BLL/reducers/appReducer/actions';
import { setIsLoginInAC } from 'BLL/reducers/authReducer/actions';
import { REQUEST_TO_SERVER } from 'common/constants';
import { AppThunk } from 'common/types';
import { authApi } from 'DAL';

export const isInitializedTC = (): AppThunk => dispatch => {
  dispatch(setAppStatusAC(REQUEST_TO_SERVER));
  authApi
    .me()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setIsLoginInAC(true));
        dispatch(setAppStatusAC('succeed'));
      } else {
        dispatch(dispatch(setIsLoginInAC(false)));
        dispatch(setAppStatusAC('failed'));
        dispatch(
          setAppErrorAC(
            res.data.messages[0] ? res.data.messages[0] : 'Some error occurred',
          ),
        );
      }
    })
    .catch(err => {
      dispatch(setAppErrorAC(err.message ? err.message : 'Some error occurred'));
      dispatch(setAppStatusAC('failed'));
    })
    .finally(() => {
      dispatch(setIsInitializedAC(true));
    });
};
