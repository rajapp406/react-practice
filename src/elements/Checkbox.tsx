import { Checkbox, TextField } from "@mui/material"
import React from "react"

export const TCheckbox = (props) => {
    return (
        <>
        <Checkbox id="outlined-basic" label="Outlined" variant="outlined" {...props}>{props.children}</Checkbox>
        </>
    )
}