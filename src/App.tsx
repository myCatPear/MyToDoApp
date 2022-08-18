import React, { FC, useEffect } from 'react';

import { LinearProgress } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { useAppDispatch, useAppSelector } from './common/hooks';

import { isInitializedTC } from 'BLL/app-reducer';
import {
  PATH_TO_LOGIN,
  PATH_TO_TODOLISTS_LIST,
  REQUEST_TO_SERVER,
} from 'common/constants';
import { MyAppBar, ErrorSnackBar } from 'components';
import { Login, TodoListsList } from 'features';
import { getAppStatus } from 'selectors';

export const App: FC = () => {
  console.log('app rendering');
  const status = useAppSelector(getAppStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isInitializedTC());
  }, [dispatch]);

  return (
    <>
      <MyAppBar />
      {status === REQUEST_TO_SERVER && <LinearProgress />}
      <ErrorSnackBar />
      <Routes>
        <Route path={PATH_TO_LOGIN} element={<Login />} />
        <Route path={PATH_TO_TODOLISTS_LIST} element={<TodoListsList />} />
        {/* <Route path="*" element={<Page404/>}/> */}
      </Routes>
    </>
  );
};
