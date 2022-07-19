const SET_APP_STATUS = 'APP/SET_APP_REQUEST_STATUS'
const SET_APP_ERROR = 'APP/SET_APP_ERROR'
const SET_APP_IS_INITIALIZED = 'APP/SET_APP_IS_INITIALIZED'

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
        case SET_APP_IS_INITIALIZED:
            return {...state, isInitialized:action.value}
        default:
            return state
    }
}

export type AppActionsType = setAppStatusACType
    | setErrorACType
    | setInitializedACType

export const setAppStatusAC = (status: AppRequestStatusType) => ({type: SET_APP_STATUS, status,} as const)

type setAppStatusACType = ReturnType<typeof setAppStatusAC>

export const setAppErrorAC = (error: string | null) => ({type: SET_APP_ERROR, error} as const)

type setErrorACType = ReturnType<typeof setAppErrorAC>

export const setAppInitializedAC = (value: boolean) => ({type: SET_APP_IS_INITIALIZED, value} as const)

type setInitializedACType = ReturnType<typeof setAppInitializedAC>




