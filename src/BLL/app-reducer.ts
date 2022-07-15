const SET_APP_STATUS = 'APP/SET_APP_REQUEST_STATUS'

const initialState:InitialStateType = {
    status:'idle'
}

type InitialStateType = {
    status: AppRequestStatusType
}

export type AppRequestStatusType = 'idle' | 'loading' | 'succeed' | 'failed'

export const appReducer = (state:InitialStateType = initialState, action:AppActionsType):InitialStateType => {
    switch (action.type) {
        case SET_APP_STATUS:
            return {...state, status:action.status}
        default:
            return state
    }
}

export type AppActionsType = setAppStatusACType

export const setAppStatusAC = (status:AppRequestStatusType) => {
    return {
        type: SET_APP_STATUS,
        status,
    } as const
}

type setAppStatusACType = ReturnType<typeof setAppStatusAC>




