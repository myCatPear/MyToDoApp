import { createTodoListAC, deleteTodoListAC, updateTodoListTitleAC } from './actions';
import { TodolistsInitialStateType } from './types';

import { todolistReducer } from 'BLL/reducers/todolistReducer';
import { TodoListType } from 'DAL/todolistAPI/types';

let startState: TodolistsInitialStateType[] = [];
const todolistID1 = '1';
const todolistID2 = '2';

beforeEach(() => {
  startState = [
    { id: todolistID1, title: 'One', order: 1, addedDate: '1', filter: 'All' },
    { id: todolistID2, title: 'Two', order: 2, addedDate: '2', filter: 'All' },
  ];
});

test('correct todolist should be removed', () => {
  const endState = todolistReducer(startState, deleteTodoListAC(todolistID1));

  expect(endState.length).toBe(1);
});

test('correct todolist should be added', () => {
  const newStateLength = 3;
  const newTodoLists: TodoListType = {
    id: '3',
    order: 1,
    title: 'New todolist',
    addedDate: '',
  };
  const endState = todolistReducer(startState, createTodoListAC(newTodoLists));

  expect(endState.length).toBe(newStateLength);
});

test('correct todolist should change its name', () => {
  const endState = todolistReducer(startState, updateTodoListTitleAC('1', 'newTitle'));

  expect(endState[0].title).toBe('newTitle');
  expect(endState[1].title).toBe('Two');
});
