import React from "react"
import { TaskFilters } from "../model/taskData"
import TSelect from "../../../elements/Select";

/**
 * dropdown with All, Active
 * @returns 
 */
export default function Filters({onChange, selected =  TaskFilters.Active}: {onChange: (e: string) => void, selected: TaskFilters}) {
    return (
        <>
            <TSelect onChange={(e: any)=> {
                return onChange(e.target.value)
            }} value={TaskFilters.All}  defaultValue={TaskFilters.All} options={Object.keys(TaskFilters)}>
          
            </TSelect>
        </>
    )
}