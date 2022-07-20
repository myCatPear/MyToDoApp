import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {getTasksTC} from "../../../../BLL/task-reducer";
import {TaskType} from "../../../../DAL/todolist-api";
import {getTodoListsTC} from "../../../../BLL/todolist-reducer";

type TasksPropsType = {
    todolistID:string
    task:TaskType
}

export const Task:React.FC<TasksPropsType> = (props) => {
    const {
        todolistID,
        task
    } = props




    const dispatch = useAppDispatch()
    return (
       <div>{task.title}</div>
    );
};
