import React, { useState } from "react"
import { TaskFilters } from "../model/taskData"
import TSelect from "../../../elements/Select";
import { getOptionsFromEnum } from "../../../util/common.util";

/**
 * dropdown with All, Active
 * @returns 
 */
export default function Filters({onChange, selected =  Object.keys(TaskFilters)[1]}: {onChange: (e: string) => void, selected?: string}) {
    return (
        <>
            <TSelect label="Filter" onChange={(e: any)=> {
                return onChange(e.target.value)
            }}  defaultValue={TaskFilters.All} options={getOptionsFromEnum(TaskFilters)}>
          
            </TSelect>
        </>
    )
}