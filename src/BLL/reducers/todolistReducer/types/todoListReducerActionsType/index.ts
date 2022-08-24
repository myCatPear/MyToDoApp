import { CreateTodoListACType } from 'BLL/reducers/todolistReducer/types/createTodoListACType';
import { DeleteTodoListACType } from 'BLL/reducers/todolistReducer/types/deleteTodoListACType';
import { SetTodoListsACType } from 'BLL/reducers/todolistReducer/types/setTodoListsACType';
import { UpdateTodolistTitleACType } from 'BLL/reducers/todolistReducer/types/updateTodolistTitleACType';

export type TodoListReducerActionsType =
  | SetTodoListsACType
  | CreateTodoListACType
  | DeleteTodoListACType
  | UpdateTodolistTitleACType;
