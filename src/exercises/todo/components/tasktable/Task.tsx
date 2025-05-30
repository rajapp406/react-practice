import React, { useContext, useEffect, useState } from "react";
import { TaskData } from "../../model/taskData";
import { DataContext } from "../../context/DataContext";
import { TCheckbox } from "../../../../elements/Checkbox";

export default function Task(taskDetails: TaskData) {
    const {selectedList, onSelectedList} = useContext(DataContext);
    return (
        <div key={taskDetails.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
            <div><TCheckbox checked={selectedList?.includes(taskDetails.id)} id={taskDetails.id} onChange={(e)=> {
                onSelectedList(taskDetails.id);
            }} value={taskDetails.id} /></div>
            <div>{taskDetails.task}</div>
            <div>{taskDetails.status}</div>
        </div>
    )
}