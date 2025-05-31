import TodoForm from "./components/todoform/TodoForm";
import { useContext, useEffect } from "react";
import { ActionTodo, TaskFilters } from "./model/taskData";
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
import { getAllTodosByThunk } from "../../redux/thunks/allTodosThunk";
import TSelect from "../../elements/Select";
import { getOptionsFromEnum } from "../../util/common.util";


export default function Todo() {
    const { selectedList, setSelectedList } = useContext(DataContext)

    const dispatch: AppDispatch = useDispatch();

    const onSave = async (s: any) => {
        await dispatch(createTodoByTaskThunk(s))
        dispatch(searchTodoByTaskThunk(TaskFilters.All));
    }
    const onChange = async (status: string) => {
        console.log(status, '-------')
      await dispatch(filterTodoByTaskThunk(status))

    }
    const onAction = async (status: string) => {
        console.log(status, '-------')
      await dispatch(deleteTodoByTaskThunk(status))

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
        dispatch(getAllTodosByThunk(''));
        console.log('......', 'allTodos')
    
      },[])
    return (
        <>
        <div>
        <TodoForm onSubmit={onSave} />
        <div style={{display: 'flex'}}>
        <Filters onChange={onChange} />
            <Search onSearch={onSearch} />
            <TSelect label="Action" onChange={onAction} options={getOptionsFromEnum(ActionTodo)} />
        </div>

            <Tasktable />
            <TaskDetailsContainer/>
        </div>

        </>


    )
}

/**
 * create a todo 
 * filter a todo | search a todo | delete a todo 
 * list out to do | update a todo with link
 */