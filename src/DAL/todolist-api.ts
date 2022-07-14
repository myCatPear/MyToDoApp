import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: {
        "API-KEY": "d6a9965b-9508-4ee9-9d27-31daa8d146f5"
    }
})

const todoListApi = {
    getTodoList() {
        return instance.get<TodoListType[]>('/todo-lists')
    },
    createTodoList(title: string) {
        return instance.post<ResponseType<{item:TodoListType}>>('/todo-lists', {title})
    },
    deleteTodoList(todoListID:string) {
        return instance.delete<ResponseType>(`/todo-lists/${todoListID}`)
    },
    updateTodoListTitle(todoListID:string,title:string) {
        return instance.put<ResponseType>(`/todo-lists/${todoListID}`,{title})
    },
    getTasks(todoListID:string) {
        return instance.get<GetTaskResponse>(`/todo-lists/${todoListID}/tasks`)
    },
    createTask(todoListID:string, title:string) {
        return instance.post<ResponseType<{item:TaskType}>>(`/todo-lists/${todoListID}/tasks`, {title})
    },
    updateTask(todoListID:string, taskID:string, model:UpdateTaskModelType) {
        return instance.put<ResponseType<{item:TaskType}>>(`/todo-lists/${todoListID}/tasks/${taskID}`, model)
    }
}

const authAPI = {
    me() {
        return instance.get<ResponseType<AuthMeResponseType>>('/auth/me')
    },
    login(data:LoginParamsType) {
        return instance.post<ResponseType<{userId:number}>>('/auth/login')
    },
    logout() {
        return instance.delete<ResponseType>('/auth/login')
    }
}

type TodoListType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors:string[]
    data: D
}

type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTaskResponse = {
    items:TaskType[]
    totalCount:number
    error:string
}

type UpdateTaskModelType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}

type AuthMeResponseType = {
    id: number
    email: string
    login: string
}

type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}