import * as React from 'react';

import { AppBar, Box, Button, Toolbar } from '@mui/material';

import { logoutTC } from 'BLL/reducers/authReducer/thunks/logoutTC';
import { useAppDispatch, useAppSelector } from 'common/hooks';
import { getIsLogin } from 'selectors';

export const MyAppBar: React.FC = () => {
  const isLogin = useAppSelector(getIsLogin);
  const dispatch = useAppDispatch();

  const onLogoutButtonClick = (): void => {
    dispatch(logoutTC());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isLogin && (
            <Button color="inherit" onClick={onLogoutButtonClick}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
