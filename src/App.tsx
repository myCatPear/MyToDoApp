import React, { FC, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import s from './App.module.scss';
import { useAppDispatch, useAppSelector } from './common/hooks';
import { AppCircularProgress } from './components/AppCircularProgress/AppCircularProgress';

import { isInitializedTC } from 'BLL/reducers/appReducer/thunks';
import {
  PATH_TO_LOGIN,
  PATH_TO_TODOLISTS_LIST,
  REQUEST_TO_SERVER,
} from 'common/constants';
import { MyAppBar, ErrorSnackBar, AppLinearProgress } from 'components';
import { Login, TodoListsList } from 'features';
import { getAppStatus, getIsInitialized } from 'selectors';

export const App: FC = () => {
  console.log('app rendering');
  const status = useAppSelector(getAppStatus);
  const isInitialized = useAppSelector(getIsInitialized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isInitializedTC());
  }, [dispatch]);
  if (!isInitialized) return <AppCircularProgress />;

  return (
    <div className={s.app}>
      <MyAppBar />
      {status === REQUEST_TO_SERVER && <AppLinearProgress />}
      <ErrorSnackBar />
      <Routes>
        <Route path={PATH_TO_LOGIN} element={<Login />} />
        <Route path={PATH_TO_TODOLISTS_LIST} element={<TodoListsList />} />
        {/* <Route path="*" element={<Page404/>}/> */}
      </Routes>
    </div>
  );
};
