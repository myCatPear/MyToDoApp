import {useFormik} from 'formik';
import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {loginTC} from "../../BLL/auth-reducer";
import { Navigate } from 'react-router-dom';

const Login = () => {
    const isLogin = useAppSelector(state => state.auth.isLoginIn)

    const dispatch = useAppDispatch()

    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors:FormikErrorType = {};

            if (!values.email) {
                errors.email = 'Email is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) errors.password = 'Password is required!'
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
        },
    });
    if (isLogin) {
        return <Navigate to={'/'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
            <input
                id="rememberMe"
                type="checkbox"
                {...formik.getFieldProps('rememberMe')}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;