import React from 'react';
import st from './TodoList.module.css'
import {tasksTypes} from "../Todo";
import {TodoItem} from "../TodoItem/TodoItem";
type TodoListPropsTypes = {
    tasks: tasksTypes[]
    formId: string
}
export const TodoList:React.FC<TodoListPropsTypes> = (
    {
        tasks, formId
    }
) => {
    return (
        <div className={st.container}>
            <ul>
                {tasks.map(i => <TodoItem
                    key={i.id}
                    id={i.id}
                    text={i.text}
                    isDone={i.isDone}
                    formId={formId}
                />)}
            </ul>
        </div>
    );
};
