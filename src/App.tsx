import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import React, {useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ErrorSnackBar from './components/SnackBar/ErrorSnackBar';
import Login from './features/login/Login';
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {ButtonAppBar} from "./components/AppBar/AppBar";
import {Page404} from "./components/PAGE404/PAGE404";
import {isInitializedTC} from "./BLL/app-reducer";
import {TodoListsList} from "./features/TodoListsList/TodoListsList";


function App() {
    const status = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(isInitializedTC())
    },[])

    return (
        <>
            <ButtonAppBar/>
            {status ===  'loading' &&  <LinearProgress />}
           <ErrorSnackBar/>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<TodoListsList/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </>
    );
}

export default App;
