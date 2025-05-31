import { FormControl, InputLabel, TextField } from "@mui/material"
import React from "react"

export const InputBox = (props) => {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" {...props} />
            </FormControl>
        </>
    )
}