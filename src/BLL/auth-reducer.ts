import {AppThunk} from "./store";
import {authAPI, LoginParamsType} from "../DAL/todolist-api";

const SET_IS_LOGIN_IN = 'AUTH/SET_IS_LOGIN_IN'

const initialState = {
    isLoginIn: false
}

type InitialStateType = {
    isLoginIn: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGIN_IN:
            return {...state, isLoginIn: action.value}
        default:
            return state
    }
}

export type AuthActionsType = setIsLoginInACType

export const setIsLoginInAC = (value: boolean) => {
    return {
        type: SET_IS_LOGIN_IN,
        value
    } as const
}

type setIsLoginInACType = ReturnType<typeof setIsLoginInAC>

export const loginTC = (data:LoginParamsType): AppThunk => (dispatch) => {

    authAPI.login(data)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
}
