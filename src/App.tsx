import React, { useEffect } from 'react';

import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { isInitializedTC } from 'BLL/app-reducer';
import { useAppDispatch, useAppSelector } from 'common/hooks/hooks';
import { MyAppBar, ErrorSnackBar } from 'components';
import { Login, TodoListsList } from 'features';

export const App: React.FC = () => {
  console.log('app rendering');
  const status = useAppSelector(state => state.app.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isInitializedTC());
  }, [dispatch]);

  return (
    <>
      <MyAppBar />
      {status === 'loading' && <LinearProgress />}
      <ErrorSnackBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<TodoListsList />} />
        {/* <Route path="*" element={<Page404/>}/> */}
      </Routes>
    </>
  );
};
