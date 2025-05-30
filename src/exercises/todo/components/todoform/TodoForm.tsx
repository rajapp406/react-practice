import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { create } from '../../../../redux/slices/todoDataSlice';
import { TButton } from '../../../../elements/Button';
import { InputBox } from '../../../../elements/Input';
interface FormData {
    task: string
}
export default function TodoForm({ data = {} as FormData, onSubmit }: { data?: FormData, onSubmit: (d: FormData) => void }) {
    const [formData, setFormData] = useState(data);
    const dispatch = useDispatch()
    const onClick = () => {
        onSubmit(formData);
        dispatch(create(formData))

    }
    const select = useSelector((state: RootState) => {
        console.log(state['todo-form']);
        return state['todo-form'];
    })
    return (
        <>
            <div>
                <InputBox type='text' name='task' value={formData.task} onInput={(e: any) => setFormData({ ...formData, task: e.target.value })} />
                <TButton onClick={onClick}>Submit</TButton>
            </div>

        </>
    )
}

/**
 * state: it should maintain all the form state inside.
 * send the data outside to store.
 */