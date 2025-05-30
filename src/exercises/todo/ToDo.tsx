import TodoForm from "./components/todoform/TodoForm";
import { useContext, useEffect } from "react";
import { TaskFilters } from "./model/taskData";
import localService from './services/localStorageService'
import { DataContext } from "./context/DataContext";
import { Tasktable } from "./components/tasktable/TaskTable";
import Search from "./components/search/SearchTask";
import Filters from "./components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { searchTodoByTaskThunk } from "../../redux/thunks/searchThunk";
import { deleteTodoByTaskThunk } from "../../redux/thunks/deleteThunk";
import { completeTodoByTaskThunk } from "../../redux/thunks/completeThunk";
import React from "react";
import { createTodoByTaskThunk } from "../../redux/thunks/createThunk";
import { filterTodoByTaskThunk } from "../../redux/thunks/filterThunk";
import { TButton } from "../../elements/Button";
import { TaskDetailsContainer } from "./components/taskdetails/TaskDetailsContainer";


export default function Todo() {
    const { selectedList, setSelectedList } = useContext(DataContext)

    const dispatch: AppDispatch = useDispatch();

    const onSave = async (s: any) => {
        await dispatch(createTodoByTaskThunk(s))
        dispatch(searchTodoByTaskThunk(TaskFilters.All));
    }
    const onChange = async (status: string) => {
      await dispatch(filterTodoByTaskThunk(status))

    }
    const onSearch = async (str: string) => {
        await dispatch(searchTodoByTaskThunk(str));
    }
    const onDelete = async () => {
        await dispatch(deleteTodoByTaskThunk(selectedList))
        dispatch(searchTodoByTaskThunk(TaskFilters.All));
        setSelectedList([]);

    }
    const onComplete = async () => {
        await dispatch(completeTodoByTaskThunk(selectedList))
        dispatch(searchTodoByTaskThunk(TaskFilters.All));
        setSelectedList([]);
    }

    useEffect(()=>{
        dispatch(searchTodoByTaskThunk(TaskFilters.All));
    },[])
    return (
        <>
            <TodoForm onSubmit={onSave} />
            <Filters onChange={onChange} selected={TaskFilters.Active} />
            <Search onSearch={onSearch} />
            <TButton onClick={onDelete}>Delete</TButton>
            <TButton onClick={onComplete}>Complete</TButton>
            <Tasktable />
            <TaskDetailsContainer/>
        </>


    )
}

/**
 * create a todo 
 * filter a todo | search a todo | delete a todo 
 * list out to do | update a todo with link
 */