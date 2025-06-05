import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function TSelect(props: any){
    return ( 
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
    {...props}
  >
     { props.options.map((v, i) => {
            return <MenuItem key={i} value={v.key}>{v.label}</MenuItem>
        })
    }
  </Select>
  </FormControl>
    )
}
export default TSelect;

