import React, { FC } from 'react';

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

import { loginTC } from 'BLL/reducers/authReducer/thunks';
import { EMPTY_STRING, PATH_TO_TODOLISTS_LIST } from 'common/constants';
import { useAppDispatch, useAppSelector } from 'common/hooks';
import { getIsLogin } from 'selectors';

type FormikErrorType = {
  email?: string;
  password?: string;
  rememberMe?: boolean;
};

export const Login: FC = () => {
  const isLogin = useAppSelector(getIsLogin);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: EMPTY_STRING,
      password: EMPTY_STRING,
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikErrorType = {};

      if (!values.email) {
        errors.email = 'Email is Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) errors.password = 'Password is required!';

      return errors;
    },
    onSubmit: values => {
      dispatch(loginTC(values));
    },
  });

  if (isLogin) {
    return <Navigate to={PATH_TO_TODOLISTS_LIST} />;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item justifyContent="center">
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>
              <p>
                To log in get registered
                <a
                  href="https://social-network.samuraijs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <p>or use common test account credentials:</p>
              <p>Email: free@samuraijs.com</p>
              <p>Password: free</p>
            </FormLabel>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
              )}
              <TextField
                type="password"
                label="Password"
                margin="normal"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: 'red' }}>{formik.errors.password}</div>
              )}
              <FormControlLabel
                label="Remember me"
                control={<Checkbox />}
                checked={formik.values.rememberMe}
                {...formik.getFieldProps('rememberMe')}
              />

              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
