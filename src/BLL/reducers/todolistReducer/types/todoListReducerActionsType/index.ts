import { CreateTodoListsACType } from 'BLL/reducers/todolistReducer/types/createTodoListsACType';
import { DeleteTodoListsACType } from 'BLL/reducers/todolistReducer/types/deleteTodoListsACType';
import { SetTodoListsACType } from 'BLL/reducers/todolistReducer/types/setTodoListsACType';

export type TodoListReducerActionsType =
  | SetTodoListsACType
  | CreateTodoListsACType
  | DeleteTodoListsACType;
