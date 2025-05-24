import React from "react";
import { TaskData } from "../../model/taskData";
import Task from "./Task";

export default function TaskList({ tasks }: { tasks: TaskData[]} ) {

    return (
        <>
            {
                tasks.map((item, i) => <Task task={item.task} status={item.status} key={item.id} id={item.id} selected={item.selected} />)
            }
        </>
    )

}