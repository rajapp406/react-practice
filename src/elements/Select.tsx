import { MenuItem, Select } from "@mui/material";
import React from "react";

function TSelect(props: any){
    return ( <Select
    {...props}
  >
     { props.options.map((v, i) => {
            return <MenuItem key={i} value={v}>{v}</MenuItem>
        })
    }
  </Select>
    )
}
export default TSelect;

