import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../../../redux/thunks/registerThunk";
import { AppDispatch } from "../../../../redux/store";
import { TButton } from "../../../../elements/Button";
import TAlertSuccess from "../../../../elements/Alert";
import { TCard } from "../../../../elements/Card";
import { InputBox } from "../../../../elements/Input";

export function Registration() {
    const dispatch: AppDispatch = useDispatch()
    const [data, setData] = useState({ name: '', email: '', phone: null, password: '', username: '' });
    const [response, setReponse] = useState({} as any)
    const onRegister = () => {
        dispatch(registerUserThunk(data)).then((data) => {
            setReponse(data.meta)
        })
    }
    return (
        <>
            {response.requestStatus === 'fulfilled' ? <TAlertSuccess>Registration has been successful!</TAlertSuccess> : ''}
            <TCard>
                <InputBox type="text" id="name" label="Name" onInput={(e => {
                    setData({ ...data, name: e.target.value })
                })} required="true" />
                <InputBox type="email" id="email" label="Email" onInput={(e => {
                    setData({ ...data, email: e.target.value })
                })} required="true" />
                <InputBox type="text" id="username" label="Username" onInput={(e => {
                    setData({ ...data, username: e.target.value })
                })} required="true" />
                <InputBox type="password" id="password" label="Password" onInput={(e => {
                    setData({ ...data, password: e.target.value })
                })} required="true" />
                <InputBox type="number" id="phone" label="Phone" onInput={(e => {
                    setData({ ...data, phone: e.target.value })
                })} required="true" />
                <TButton onClick={onRegister}>Register</TButton>
            </TCard>
        </>
    )
}