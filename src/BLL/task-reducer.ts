import {TaskType, todoListApi} from "../DAL/todolist-api"
import {AppThunk} from "./store";
import { setTodoListsACType, SET_TODOLIST } from "./todolist-reducer";

const SET_TASKS = 'TASKS/SET_TASKS'

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

const initialState: TasksStateType = {}

export const taskReducer = (state: TasksStateType = initialState, action: TaskActionsType): TasksStateType => {
    switch (action.type) {
        case SET_TASKS:
            return {...state, [action.todolistID] : action.tasks}
        case SET_TODOLIST:
            const copytate = {...state}
            action.todolists.forEach(tl => {
                copytate[tl.id] = []
            })
            return copytate
        default:
            return state
    }
}

//ACTIONS

export type TaskActionsType = setTasksACType
| setTodoListsACType

export const setTasksAC = (todolistID:string,tasks: TaskType[]) => ({type:SET_TASKS, todolistID,tasks}as const)
type setTasksACType = ReturnType<typeof setTasksAC>

//THUNK

export const getTasksTC = (todolistID:string):AppThunk => (dispatch) => {
    todoListApi.getTasks(todolistID)
        .then((res) => {
            dispatch(setTasksAC(todolistID, res.data.items))
        })
}