import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type defaultInputPropsTypes = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type customInputPropsTypes = defaultInputPropsTypes & {
    error?: string
}
export const CustomInput:React.FC<customInputPropsTypes> = (
    {
        type, className,
        onChange, error,

        ...rest
    }
) => {
    const handlerOnChangeGetInputValue = (e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)
    const errorStyle = { border: error ? '1px solid red' : ''}
    const finalClassName = className ? className : ''
    return <input type={type} style={errorStyle} className={finalClassName} onChange={handlerOnChangeGetInputValue} {...rest}/>
};
