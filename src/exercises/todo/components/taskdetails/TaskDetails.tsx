import React from "react";
import { TaskData } from "../../model/taskData";

export function TaskDetails({data}:any){
    return (<div>
        <div>{data.status}</div>
        <div>{data.count}</div>
    </div>)
}