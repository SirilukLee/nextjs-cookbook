import { ChangeEvent, useState } from 'react'
import { Placeholders } from "../../core/configs";
import { isLetter } from '../../core/utils';


const TextInput = ({ onLoginEnter, id }: any) => {
    const input = {
        placeholder: Placeholders.TEXT_INPUT
    }

    const maxValueLength = 100

    const [value, setValue] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (isLetter(value) && value.length <= maxValueLength) {
            setValue(value)
        }
        onLoginEnter(value)
    }

    return (
        <input type="text" placeholder={input.placeholder}
            onChange={onChangeHandler} value={value} />
    )
}

export default TextInput