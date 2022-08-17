import React, { useEffect } from 'react';

import { Task } from './Tasks';

import { getTasksTC } from 'BLL/task-reducer';
import { useAppDispatch } from 'common/hooks/hooks';
import { TaskType } from 'DAL/taskAPI/types';

type TodoListPropsType = {
  todolistID: string;
  todolistTitle: string;
  tasks: TaskType[];
};

export const TodoList = React.memo((props: TodoListPropsType) => {
  console.log('TodoList rendering');

  const { todolistID, todolistTitle, tasks } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksTC(todolistID));
  }, [dispatch, todolistID]);

  return (
    <div>
      <h2>{todolistTitle}</h2>
      <div>
        {tasks.map(t => {
          return (
            <Task
              key={`${todolistID}-${Math.random()}`}
              todolistID={todolistID}
              task={t}
            />
          );
        })}
      </div>
    </div>
  );
});
