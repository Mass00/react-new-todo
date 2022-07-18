import React, {useMemo, useState} from 'react';
import {TodoForm} from "./TodoForm/TodoForm";
import {TodoList} from "./TodoList/TodoList";
import st from './Todo.module.css'
import {CustomInput} from "../UI/CustomInput";
export type tasksTypes = {
    id: string
    text: string
    isDone: boolean
}
type TotoPropsTypes = {
    tasks: tasksTypes[]
    title: string
    formId: string
    addTask: (formId: string, text: string) => void
}
export const Todo:React.FC<TotoPropsTypes> = (
    {
        tasks, title,formId,
        addTask
    }
) => {
    console.log('render')
    const [searchQ, setSearchQ] = useState<string>('')
    const handlerOnChangeSetSearchQ = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchQ(e.currentTarget.value)

    const filtredTasks = useMemo(() => {
        console.log('UseMemo')
        return tasks.filter(i => i.text.toLowerCase().includes(searchQ))
    },[searchQ,tasks])

    // const filtred = () => {
    //     console.log('Sorted')
    //     return tasks.filter(i => i.text.toLowerCase().includes(searchQ))
    // }
    // const filtredTasks = filtred()
    return (
        <div className={st.container}>
            <div>
                <span>{title}</span>
            </div>
            <TodoForm
                formId={formId}
                addTask={addTask}
            />
            <CustomInput
                style={{width: '100%', border: '1px solid dodgerblue', height: '20px'}}
                type={"text"}
                placeholder={'Поиск...'}
                value={searchQ}
                onChange={handlerOnChangeSetSearchQ}
            />
            <TodoList
                tasks={filtredTasks}
                formId={formId}
            />
        </div>
    );
};
