import React from "react";
import { TaskData } from "../../model/taskData";
import { TCard } from "../../../../elements/Card";
import { display, justifyContent } from "@mui/system";
import { TContainer } from "../../../../elements/Container";

export function TaskDetails({data}:any){
    return (
   <TCard style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>{data.status}</div>
        <div>{data.count}</div>
    </TCard>
    )
 
}