import React, { ChangeEvent, memo } from 'react';

import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';

import { deleteTaskTC, updateTaskTC } from 'BLL/reducers/taskReducer/thunks';
import { TaskStatus } from 'common/enum';
import { useAppDispatch } from 'common/hooks';
import { TaskType } from 'DAL/taskAPI/types';

type TasksPropsType = {
  todolistID: string;
  task: TaskType;
};

export const Task = memo((props: TasksPropsType) => {
  console.log('Task rendering');

  const { todolistID, task } = props;
  const dispatch = useAppDispatch();

  const onIconButtonDeleteClick = (): void => {
    dispatch(deleteTaskTC(todolistID, task.id));
  };

  const isChecked = task.status === TaskStatus.Completed;

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newCheckedValue = !event.currentTarget.checked;
    const newStatus = newCheckedValue ? TaskStatus.New : TaskStatus.Completed;

    dispatch(updateTaskTC(todolistID, task.id, newStatus));
  };

  return (
    <ul>
      <li>
        <Checkbox checked={isChecked} onChange={onCheckboxChange} />
        {task.title}
        <IconButton onClick={onIconButtonDeleteClick}>
          <Delete />
        </IconButton>
      </li>
    </ul>
  );
});
