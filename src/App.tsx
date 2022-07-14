import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './features/login/Login';

function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    );
}

export default App;
