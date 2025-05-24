import React from "react"
import { TaskFilters } from "../model/taskData"
import { useDispatch, useSelector } from "react-redux"
import { filter } from "../../redux/slices/todoFilterSlice"
import { RootState } from "../../redux/store";

/**
 * dropdown with All, Active
 * @returns 
 */
export default function Filters({onChange, selected =  TaskFilters.Active}: {onChange: (e: string) => void, selected: TaskFilters}) {
    return (
        <>
            <select onChange={(e)=> {
                return onChange(e.target.value)
            }} defaultValue={TaskFilters.Active}>
                {
                    Object.keys(TaskFilters).map((v, i) => {
                        return <option key={i} selected={TaskFilters[v] === selected} value={TaskFilters[v]}>{v}</option>
                    })
                }
            </select>
        </>
    )
}