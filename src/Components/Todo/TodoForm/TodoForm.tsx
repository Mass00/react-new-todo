import React, {useState} from 'react';
import st from './TodoForm.module.css'
import {CustomInput} from "../../UI/CustomInput";
import {CustomButton} from "../../UI/CustomButton";

type TodoFormPropsTypes = {
    formId: string
    addTask: (formId: string, text: string) => void
}
export const TodoForm: React.FC<TodoFormPropsTypes> = (
    {
        formId, addTask
    }
) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')
    const handlerOnChangeGetInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value && setInputValue(e.currentTarget.value)
    }
    const handlerOnClickAddTasks = () => {
        if (inputValue.trim()) {
            addTask(formId, inputValue)
            setInputValue('')
            setError('')
        } else {
            setError('Title is required')
        }
    }
    return (
        <>
            <div className={st.container}>
                <CustomInput
                    value={inputValue}
                    type={'text'}
                    className={st.input}
                    error={error}
                    onChange={handlerOnChangeGetInputValue}
                />
                <CustomButton
                    className={st.addBtn}
                    onClick={handlerOnClickAddTasks}
                >Add
                </CustomButton>
            </div>
            {error ? <span style={{color: 'red'}}>{error}</span> : <></>}
        </>
    );
};
