import React, { FC, useEffect } from 'react';

import { Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { changeTodolistFilterAC } from '../../BLL/reducers/todolistReducer/actions';
import { FilterTaskType } from '../../common/types';

import { createTodolistTC, fetchTodoListsTC } from 'BLL/reducers/todolistReducer/thunks';
import { PATH_TO_LOGIN } from 'common/constants';
import { useAppDispatch, useAppSelector } from 'common/hooks';
import { AddItemForm } from 'components';
import { TodoList } from 'features';
import { getIsLogin, getTasks, getTodoLists } from 'selectors';

export const TodoListsList: FC = () => {
  console.log('TodoListsList rendering');

  const dispatch = useAppDispatch();
  const todolists = useAppSelector(getTodoLists);
  const tasks = useAppSelector(getTasks);
  const isLogin = useAppSelector(getIsLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchTodoListsTC());
    } else {
      navigate(PATH_TO_LOGIN);
    }
  }, [isLogin, dispatch, navigate]);

  const handleIconButtonAddBoxClick = (title: string): void => {
    dispatch(createTodolistTC(title));
  };

  const handleChangeFilterTasksButtonClick = (
    todolistID: string,
    filter: FilterTaskType,
  ): void => {
    dispatch(changeTodolistFilterAC(todolistID, filter));
  };

  return (
    <>
      <AddItemForm onIconButtonAddBoxClick={handleIconButtonAddBoxClick} />
      <Grid container spacing={3}>
        {todolists.map(todolist => {
          return (
            <Grid item key={todolist.id}>
              <Paper style={{ padding: '10px' }}>
                <TodoList
                  key={`${todolist.id}`}
                  todolist={todolist}
                  tasks={tasks[todolist.id]}
                  onChangeFilterTasksButtonClick={handleChangeFilterTasksButtonClick}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
