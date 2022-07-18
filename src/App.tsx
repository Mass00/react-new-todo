import React, {useState} from 'react';
import {v1} from "uuid"
import './App.css';
import {Todo} from "./Components/Todo/Todo";
type TasksTypes = {
    id: string
    title: string
    filter: string
}
function App() {
    const [tasksForm, setTasksFrom] = useState<TasksTypes[]>([
        {id: v1(),title: 'Was soll ich lernen?', filter: 'all'},
        {id: v1(),title: 'Was muss ich anschaffen?', filter: 'all'},
        {id: v1(),title: 'Was soll ich machen?', filter: 'all'}
    ])
    const [tasks, setTasks] = useState({
        [tasksForm[0].id]: [
            {id: v1(), text: 'JS', isDone: true},
            {id: v1(), text: 'TS', isDone: true},
            {id: v1(), text: 'React', isDone: true}
        ],
        [tasksForm[1].id]: [
            {id: v1(), text: 'das Auto', isDone: true},
            {id: v1(), text: 'das Haus', isDone: true},
            {id: v1(), text: 'der Baum', isDone: true}
        ],
        [tasksForm[2].id]: [
            {id: v1(), text: 'Deutsch lernen', isDone: true},
            {id: v1(), text: 'was Neues erfahren', isDone: true}

        ],
    })
    const addTask = (formId: string, text: string) =>
        setTasks(prev => ({...prev, [formId]: [...tasks[formId],{id: v1(), text, isDone: false}]}))
  return (
    <div className="App">
        {tasksForm.map(i => <Todo
            key={i.id}
            formId={i.id}
            tasks={tasks[i.id]}
            title={i.title}
            addTask={addTask}
        />)}
    </div>
  );
}

export default App;
