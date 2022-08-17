import React from 'react';

import { TaskType } from 'DAL/taskAPI/types';

type TasksPropsType = {
  todolistID: string;
  task: TaskType;
};

export const Task = React.memo((props: TasksPropsType) => {
  console.log('Task rendering');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { todolistID, task } = props;

  return <div>{task.title}</div>;
});
