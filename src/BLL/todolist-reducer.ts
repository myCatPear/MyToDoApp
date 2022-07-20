import {todoListApi, TodoListType} from "../DAL/todolist-api";
import {AppThunk} from "./store";

export const SET_TODOLIST = 'TODOLIST/SET_TODOLIST'

const initialState:TodoListType[] = []

export const todolistReducer = (state: TodoListType[] = initialState, action: TodoListActionsType):TodoListType[] => {
    switch (action.type) {
        case SET_TODOLIST:
            return [...action.todolists]
        default:
            return state
    }
}

export type TodoListActionsType = setTodoListsACType

//ACTIONS

export const setTodoListsAC = (todolists:TodoListType[]) => ({type:SET_TODOLIST, todolists} as const)

export type setTodoListsACType = ReturnType<typeof setTodoListsAC>

//THUNK

export const getTodoListsTC = ():AppThunk => (dispatch) => {
    todoListApi.getTodoList()
        .then((res) => {
            dispatch(setTodoListsAC(res.data))
        })
}