import { Button } from '@mui/material';
import React from 'react';


export function TButton(props){
    return (
        <Button variant="contained" {...props}>{props.children}</Button>
    )
}