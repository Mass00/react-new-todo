import React from 'react';
import st from './TodoItem.module.css'
import {CustomInput} from "../../UI/CustomInput";
import {CustomButton} from "../../UI/CustomButton";
type todoItemPropsTypes = {
    id: string
    text: string
    isDone: boolean
    formId: string
}
export const TodoItem:React.FC<todoItemPropsTypes> = (
    {
        id, text,
        isDone, formId
    }
) => {
    return (
        <li>
            <div className={st.container}>
                <span>{text}</span>
                <div>
                    <CustomInput type={'checkbox'} checked={isDone}/>
                    <CustomButton>Del</CustomButton>
                </div>
            </div>
        </li>
    );
};

