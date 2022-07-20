import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getTodoListsTC} from "../../BLL/todolist-reducer";
import {TodoList} from "./TodoList/TodoList";

export const TodoListsList = () => {

    const dispatch = useAppDispatch()
    const todolists = useAppSelector((state) => state.todolists)
    const tasks = useAppSelector((state) => state.tasks)
    useEffect(() => {
        dispatch(getTodoListsTC())
    }, [])



    return (
        <>
            {
                todolists.map((tl) => {
                    return <TodoList
                        key={`${tl.id}-${Math.random()}`}
                        todolistID={tl.id}
                        todolistTitle={tl.title}
                        tasks={tasks[tl.id]}
                        />
                })
            }
        </>
    );
};
