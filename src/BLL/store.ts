import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppActionsType, appReducer} from "./app-reducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {TodoListActionsType, todolistReducer} from "./todolist-reducer";
import {TaskActionsType, taskReducer} from "./task-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    todolists: todolistReducer,
    tasks: taskReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof rootReducer>

type ActionsType = AuthActionsType
    | AppActionsType
    | TodoListActionsType
    | TaskActionsType

export type AppDispatch = ThunkDispatch<RootStateType, unknown, ActionsType>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, ActionsType>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
