import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components'


export function TButton(props){
    return (
        <Button variant="contained" {...props}>{props.children}</Button>
    )
}