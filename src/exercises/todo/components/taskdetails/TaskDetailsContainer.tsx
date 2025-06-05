import { useSelector } from "react-redux";
import { TaskDetails } from "./TaskDetails";
import { RootState } from "../../../../redux/store";
import { TaskFilters } from "../../model/taskData";
import {groupBy} from '../../../../util/common.util'
import React from "react";
import { TContainer } from "../../../../elements/Container";
export function TaskDetailsContainer() {
    const data = useSelector((state: RootState) =>{
        return groupBy(state.todoSearch.data, 'status');
    });

    return (
    <TContainer>
             { 
                Object.values(TaskFilters).filter(v => v !== TaskFilters.All).map(b => {
                    return <TaskDetails data={{status: b, count: data[b] || 0}} />
                })
             }  
    </TContainer>
    )
}