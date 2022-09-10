import { deleteTasksAC } from './actions';
import { TaskInitialStateType } from './types';

import { taskReducer } from './index';

import { TaskType } from 'DAL/taskAPI/types';

let startState: TaskInitialStateType = {};
const todolistID1 = '1';
const todolistID2 = '2';

beforeEach(() => {
  const task1: TaskType = {
    id: '1',
    status: 0,
    title: 'Task1',
    startDate: '',
    priority: 0,
    description: '',
    addedDate: '',
    deadline: '',
    order: 0,
    todoListId: '1',
  };
  const task2: TaskType = {
    id: '2',
    status: 0,
    title: 'Task2',
    startDate: '',
    priority: 0,
    description: '',
    addedDate: '',
    deadline: '',
    order: 0,
    todoListId: '1',
  };
  const task3: TaskType = {
    id: '3',
    status: 0,
    title: 'Task3',
    startDate: '',
    priority: 0,
    description: '',
    addedDate: '',
    deadline: '',
    order: 0,
    todoListId: '2',
  };
  const task4: TaskType = {
    id: '4',
    status: 0,
    title: 'Task4',
    startDate: '',
    priority: 0,
    description: '',
    addedDate: '',
    deadline: '',
    order: 0,
    todoListId: '2',
  };

  startState = {
    [todolistID1]: [task1, task2],
    [todolistID2]: [task3, task4],
  };
});

test('correct task shout be deleted from correct array', () => {
  const endState = taskReducer(startState, deleteTasksAC(todolistID1, '1'));

  expect(endState[todolistID1][0].title).toBe('Task2');
  expect(endState[todolistID2][0].title).toBe('Task3');
});
