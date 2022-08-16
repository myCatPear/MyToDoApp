import React, { useEffect } from 'react';

import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import { useNavigate } from 'react-router-dom';

import { TodoList } from './TodoList';

import { getTodoListsTC } from 'BLL/todolist-reducer';
import { AddItemForm } from 'components';
import { TodoListType } from 'DAL/todolist-api';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

export const TodoListsList: React.FC = () => {
  console.log('TodoListsList rendering');

  const dispatch = useAppDispatch();
  const todolists = useAppSelector<TodoListType[]>(state => state.todolists);
  const tasks = useAppSelector(state => state.tasks);
  const isLogin = useAppSelector(state => state.auth.isLoginIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      dispatch(getTodoListsTC());
    } else {
      navigate('login');
    }
  }, [isLogin, dispatch, navigate]);

  return (
    <>
      <AddItemForm />
      <Grid container spacing={3}>
        {todolists.map(tl => {
          return (
            <Grid item key={tl.id}>
              <Paper style={{ padding: '10px' }}>
                <TodoList
                  key={`${tl.id}`}
                  todolistID={tl.id}
                  todolistTitle={tl.title}
                  tasks={tasks[tl.id]}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
