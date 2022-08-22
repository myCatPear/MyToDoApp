import React, { memo, useEffect } from 'react';

import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { Task } from './Tasks';

import { createTaskTC, fetchTasksTC } from 'BLL/reducers/taskReducer/thunks';
import { deleteTodolistTC } from 'BLL/reducers/todolistReducer/thunks';
import { useAppDispatch } from 'common/hooks';
import { AddItemForm } from 'components';
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
    dispatch(fetchTasksTC(todolistID));
  }, [dispatch, todolistID]);

  const onIconButtonDeleteClick = (): void => {
    dispatch(deleteTodolistTC(todolistID));
  };

  const handleIconButtonAddBoxClick = (title: string): void => {
    dispatch(createTaskTC(todolistID, title));
  };

  return (
    <div>
      <div>
        <h2>{todolistTitle}</h2>
        <IconButton onClick={onIconButtonDeleteClick}>
          <Delete />
        </IconButton>
      </div>
      <div>
        <AddItemForm onIconButtonClick={handleIconButtonAddBoxClick} />
      </div>

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
