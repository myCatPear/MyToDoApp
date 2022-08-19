import React, { memo, useEffect } from 'react';

import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { deleteTodolistTC } from '../../../BLL/todolist-reducer';

import { Task } from './Tasks';

import { getTasksTC } from 'BLL/task-reducer';
import { useAppDispatch } from 'common/hooks';
import { TaskType } from 'DAL/taskAPI/types';

type TodoListPropsType = {
  todolistID: string;
  todolistTitle: string;
  tasks: TaskType[];
};

export const TodoList = memo((props: TodoListPropsType) => {
  console.log('TodoList rendering');

  const { todolistID, todolistTitle, tasks } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksTC(todolistID));
  }, [dispatch, todolistID]);

  const onIconButtonClick = (): void => {
    dispatch(deleteTodolistTC(todolistID));
  };

  return (
    <div>
      <h2>{todolistTitle}</h2>
      <IconButton onClick={onIconButtonClick}>
        <Delete />
      </IconButton>
      <div>
        {tasks.map(task => {
          return (
            <Task
              key={`${todolistID}-${Math.random()}`}
              todolistID={todolistID}
              task={task}
            />
          );
        })}
      </div>
    </div>
  );
});
