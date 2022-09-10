import React from 'react';

import { LinearProgress } from '@mui/material';

import s from './AppLinearProgress.module.scss';

export const AppLinearProgress: React.FC = () => {
  return (
    <div className={s.progress}>
      <LinearProgress />
    </div>
  );
};
