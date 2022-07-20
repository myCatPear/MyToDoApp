import {AppThunk} from "./store";
import {authAPI} from "../DAL/todolist-api";
import {setIsLoginInAC} from "./auth-reducer";

const SET_APP_STATUS = 'APP/SET_APP_REQUEST_STATUS'
const SET_APP_ERROR = 'APP/SET_APP_ERROR'

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

type InitialStateType = {
    status: AppRequestStatusType
    error: null | string
    isInitialized: boolean
}

export type AppRequestStatusType = 'idle' | 'loading' | 'succeed' | 'failed'

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case SET_APP_STATUS:
            return {...state, status: action.status}
        case SET_APP_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

export type AppActionsType = setAppStatusACType
    | setErrorACType


export const setAppStatusAC = (status: AppRequestStatusType) => ({type: SET_APP_STATUS, status,} as const)

type setAppStatusACType = ReturnType<typeof setAppStatusAC>

export const setAppErrorAC = (error: string | null) => ({type: SET_APP_ERROR, error} as const)

type setErrorACType = ReturnType<typeof setAppErrorAC>


export const isInitializedTC = ():AppThunk => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoginInAC(true))
                dispatch(setAppStatusAC('succeed'))
            }
        })
        .catch((err) => {
            dispatch(setAppErrorAC(err.message ? err.message : 'Some error occured'))
            dispatch(setAppStatusAC('failed'))
        })
}




