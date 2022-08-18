import * as React from 'react';

import { Snackbar, Stack } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { setAppErrorAC } from 'BLL/app-reducer';
import { useAppDispatch, useAppSelector } from 'common/hooks';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ErrorSnackBar: React.FC = () => {
  const error = useAppSelector(state => state.app.error);
  const dispatch = useAppDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setAppErrorAC(null));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Stack>
  );
};
