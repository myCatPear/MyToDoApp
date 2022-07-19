import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useAppSelector} from "../../hooks/hooks";


export const ButtonAppBar = () => {
    const isLogin = useAppSelector(state => state.auth.isLoginIn)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {isLogin && <Button color="inherit">Logout</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
