import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './features/login/Login';
import {useAppSelector} from "./hooks/hooks";

function App() {
    const status = useAppSelector(state => state.app.status)

    return (
        <>
            {status ===  'loading' &&  <LinearProgress />}
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    );
}

export default App;
