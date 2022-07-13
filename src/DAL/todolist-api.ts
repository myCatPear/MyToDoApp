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
        return instance.put(`/todo-lists/${todoListID}`,{title})
    },
    getTasks(todoListID:string) {
        return instance.get(`/todo-lists/${todoListID}/tasks`)
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
    data: D
}