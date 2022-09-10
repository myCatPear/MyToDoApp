import React from 'react';

import { CircularProgress } from '@mui/material';

import s from './AppCircularProgress.module.scss';

export const AppCircularProgress: React.FC = () => {
  return (
    <div className={s.progress}>
      <CircularProgress />
    </div>
  );
};
