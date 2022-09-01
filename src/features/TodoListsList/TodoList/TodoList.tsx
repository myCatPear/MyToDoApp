import React, { memo, useEffect } from 'react';

import { Delete } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { TaskStatus } from '../../../common/enum';

import { Task } from './Tasks';

import { createTaskTC, fetchTasksTC } from 'BLL/reducers/taskReducer/thunks';
import {
  updateTodolistTitleTC,
  deleteTodolistTC,
} from 'BLL/reducers/todolistReducer/thunks';
import { TodolistsInitialStateType } from 'BLL/reducers/todolistReducer/types';
import { useAppDispatch } from 'common/hooks';
import { FilterTaskType } from 'common/types';
import { AddItemForm, EditableSpan } from 'components';
import { TaskType } from 'DAL/taskAPI/types';

type TodoListPropsType = {
  todolist: TodolistsInitialStateType;
  tasks: TaskType[];
  onChangeFilterTasksButtonClick: (todolistID: string, filter: FilterTaskType) => void;
};

export const TodoList = memo((props: TodoListPropsType) => {
  console.log('TodoList rendering');

  const { todolist, tasks, onChangeFilterTasksButtonClick } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasksTC(todolist.id));
  }, [dispatch, todolist.id]);

  const onIconButtonDeleteClick = (): void => {
    dispatch(deleteTodolistTC(todolist.id));
  };

  const handleIconButtonAddBoxClick = (title: string): void => {
    dispatch(createTaskTC(todolist.id, title));
  };

  const handleChangeTitle = (title: string): void => {
    dispatch(updateTodolistTitleTC(todolist.id, title));
  };

  const onAllTasksButtonClick = (): void => {
    onChangeFilterTasksButtonClick(todolist.id, 'All');
  };

  const onActiveTasksButtonClick = (): void => {
    onChangeFilterTasksButtonClick(todolist.id, 'Active');
  };

  const onCompleteTasksButtonClick = (): void => {
    onChangeFilterTasksButtonClick(todolist.id, 'Complete');
  };

  let allTasksForTodolist = tasks;

  if (todolist.filter === 'Active') {
    allTasksForTodolist = tasks.filter(task => task.status === TaskStatus.New);
  }

  if (todolist.filter === 'Complete') {
    allTasksForTodolist = tasks.filter(task => task.status === TaskStatus.Completed);
  }

  return (
    <div>
      <div>
        <h3>
          <EditableSpan title={todolist.title} changeTitle={handleChangeTitle} />
          <IconButton onClick={onIconButtonDeleteClick}>
            <Delete />
          </IconButton>
        </h3>
      </div>
      <div>
        <AddItemForm onIconButtonAddBoxClick={handleIconButtonAddBoxClick} />
      </div>

      <div>
        {allTasksForTodolist.map(task => {
          return (
            <Task
              key={`${todolist.id}-${Math.random()}`}
              todolistID={todolist.id}
              task={task}
            />
          );
        })}
      </div>
      <Button
        variant={todolist.filter === 'All' ? 'contained' : 'outlined'}
        onClick={onAllTasksButtonClick}
      >
        All tasks
      </Button>
      <Button
        variant={todolist.filter === 'Active' ? 'contained' : 'outlined'}
        onClick={onActiveTasksButtonClick}
      >
        Active
      </Button>
      <Button
        variant={todolist.filter === 'Complete' ? 'contained' : 'outlined'}
        onClick={onCompleteTasksButtonClick}
      >
        Complete
      </Button>
    </div>
  );
});
