import { FormControl, InputLabel, TextField } from "@mui/material"
import React from "react"

export const InputBox = (props) => {
    return (
        <>
            <FormControl style={{padding: '5px'}} fullWidth>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" {...props} />
            </FormControl>
        </>
    )
}