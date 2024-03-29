import React, { ChangeEvent, memo } from 'react';

import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';

import s from './Task.module.scss';

import { deleteTaskTC, updateTaskTC } from 'BLL/reducers/taskReducer/thunks';
import { TaskStatus } from 'common/enum';
import { useAppDispatch } from 'common/hooks';
import { EditableSpan } from 'components';
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
    const status = newCheckedValue ? TaskStatus.New : TaskStatus.Completed;

    dispatch(updateTaskTC(todolistID, task.id, { status }));
  };

  const handleEditableSpanChangeTitle = (title: string): void => {
    dispatch(updateTaskTC(todolistID, task.id, { title }));
  };

  return (
    <ul className={s.task__list}>
      <li>
        <Checkbox checked={isChecked} onChange={onCheckboxChange} />
        <EditableSpan title={task.title} changeTitle={handleEditableSpanChangeTitle} />
        <IconButton onClick={onIconButtonDeleteClick}>
          <Delete />
        </IconButton>
      </li>
    </ul>
  );
});
