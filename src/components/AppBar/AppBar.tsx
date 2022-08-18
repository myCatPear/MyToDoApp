import * as React from 'react';

import { AppBar, Box, Button, Toolbar } from '@mui/material';

import { useAppSelector } from 'common/hooks';
import { getIsLogin } from 'selectors';

export const MyAppBar: React.FC = () => {
  const isLogin = useAppSelector(getIsLogin);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{isLogin && <Button color="inherit">Logout</Button>}</Toolbar>
      </AppBar>
    </Box>
  );
};
