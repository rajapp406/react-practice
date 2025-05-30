import { TextField } from "@mui/material"
import React from "react"

export const InputBox = (props) => {
    return (
        <>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" {...props}/>
        </>
    )
}