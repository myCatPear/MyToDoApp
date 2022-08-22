import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer, authReducer, taskReducer, todolistReducer } from 'BLL';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  todolists: todolistReducer,
  tasks: taskReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// а это, чтобы можно было в консоли браузера обращаться к index в любой момент
// @ts-ignore
window.store = store;
