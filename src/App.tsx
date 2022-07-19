import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ErrorSnackBar from './components/SnackBar/ErrorSnackBar';
import Login from './features/login/Login';
import {useAppSelector} from "./hooks/hooks";
import {ButtonAppBar} from "./components/AppBar/AppBar";
import {Page404} from "./components/PAGE404/PAGE404";


function App() {
    const status = useAppSelector(state => state.app.status)

    return (
        <>
            <ButtonAppBar/>
            {status ===  'loading' &&  <LinearProgress />}
           <ErrorSnackBar/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </>
    );
}

export default App;
