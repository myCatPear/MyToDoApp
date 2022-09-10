import { deleteTodoListAC } from './actions';
import { TodolistsInitialStateType } from './types';

import { todolistReducer } from './index';

let startState: TodolistsInitialStateType[] = [];
const todolistID1 = '1';
const todolistID2 = '2';

beforeEach(() => {
  startState = [
    { id: todolistID1, title: '1', order: 1, addedDate: '', filter: 'All' },
    { id: todolistID2, title: '2', order: 2, addedDate: '', filter: 'All' },
  ];
});

test('correct todolist should be removed', () => {
  const endState = todolistReducer(startState, deleteTodoListAC(todolistID1));

  expect(endState.length).toBe(1);
});
