import React, { useState } from "react";
import { TButton } from "../../../../elements/Button";
import { InputBox } from "../../../../elements/Input";
import { TCard } from "../../../../elements/Card";


export function Login(){
    const [data, setData] = useState({username: '', password: ''});
const onLogin = () =>{
    console.log(data)
}
    return (
        <>
        <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', width: '100%', height: '200px'}}>
        <TCard>
            <InputBox type="text" label="Username" value={data.username} onInput={(e => {
              setData({...data, username: e.target.value})  
            })} />
            <InputBox type="password" value={data.password} onInput={(e => {
              setData({...data, password: e.target.value})  
            })}  label="Password" />
            <TButton onClick={onLogin}>Login</TButton> 
        </TCard>
        </div>
        
        </>
    )
}