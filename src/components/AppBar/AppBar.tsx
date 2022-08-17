import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

import { useAppSelector } from 'common/hooks/hooks';

export const MyAppBar: React.FC = () => {
  const isLogin = useAppSelector(state => state.auth.isLoginIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{isLogin && <Button color="inherit">Logout</Button>}</Toolbar>
      </AppBar>
    </Box>
  );
};
