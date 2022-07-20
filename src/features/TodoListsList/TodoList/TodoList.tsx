import React, {useEffect} from 'react';
import {Task} from "./Tasks/Task";
import {TaskType} from "../../../DAL/todolist-api";
import {getTodoListsTC} from "../../../BLL/todolist-reducer";
import {useAppDispatch} from "../../../hooks/hooks";
import {getTasksTC} from "../../../BLL/task-reducer";


type TodoListPropsType = {
    todolistID:string
    todolistTitle:string
    tasks:TaskType[]
}

export const TodoList:React.FC<TodoListPropsType> = (props) => {

    const {
        todolistID,
        todolistTitle,
        tasks
    } = props

    useEffect(() => {
        dispatch(getTasksTC(todolistID))
    }, [])
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>{todolistTitle}</h2>
            <div>
                {
                    tasks.map((t) => {
                        return <Task
                            key={`${todolistID}-${Math.random()}`}
                            todolistID={todolistID}
                            task={t}
                            />
                    })
                }
            </div>
        </div>
    );
};