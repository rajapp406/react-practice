import TaskList from "./TaskLIst";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { searchTodoByTaskThunk } from "../../../../redux/thunks/searchThunk";
import { TaskFilters } from "../../model/taskData";
import React from "react";
import { createSelector } from "@reduxjs/toolkit";
const filterTodo = createSelector(
    (state: RootState) => state.todoFilter,
    (state: RootState) => state.todoSearch,
    (filter, search) =>{
        console.log(search, filter, '----');
        const filterQuery = filter.filter;
        const searchQuery = search.searchQuery;
        if(searchQuery === TaskFilters.All){
            return search.data;
        }
        const finalData = search.data.filter((e, i) => filter.data.findIndex(v => v.id === e.id) !== -1 )
        return finalData as any;
    }

)
export function Tasktable() {
    const data = useSelector(filterTodo);
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        console.log(data)
     }, [data])
    return (
        <>
            <TaskList tasks={data} />
        </>
    )
}

/**
 * 
 * Create a an onbect with that imitates tasklist and tasks
 * pass the the relevent data to the relevant componnets
 * hasndle the curd in the  todo list componnet
 */







/**
 * Get all the items from the db
 * iterarate one by one and display
 * create a micro component to display each task
 * add actions to each task, update and delete
 * T
 */

/**
 * Task component
 * it holds data and a check box.
 * it takes task details and onSelect which returns ids selecetd
 */

/**
 * Task List
 * Has both filters and task list. list the items using Task components
 */