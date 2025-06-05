import TodoForm from "../../todoform/TodoForm";
import { Profiler, useContext, useEffect } from "react";
import { ActionTodo, TaskFilters } from "./model/taskData";
import { DataContext } from "./context/DataContext";
import { Tasktable } from "./components/tasktable/TaskTable";
import Search from "./components/search/SearchTask";
import Filters from "./components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { searchTodoByTaskThunk } from "../../redux/thunks/todo/searchThunk";
import { deleteTodoByTaskThunk } from "../../redux/thunks/todo/deleteThunk";
import { completeTodoByTaskThunk } from "../../redux/thunks/todo/completeThunk";
import React from "react";
import { createTodoByTaskThunk } from "../../redux/thunks/todo/createThunk";
import { filterTodoByTaskThunk } from "../../redux/thunks/todo/filterThunk";
import { TButton } from "../../elements/Button";
import { TaskDetailsContainer } from "./components/taskdetails/TaskDetailsContainer";
import { getAllTodosByThunk } from "../../redux/thunks/todo/allTodosThunk";
import TSelect from "../../elements/Select";
import { getOptionsFromEnum } from "../../util/common.util";

export default function Todo() {
  const { selectedList, setSelectedList } = useContext(DataContext);

  const dispatch: AppDispatch = useDispatch();

  const onSave = async (s: any) => {
    await dispatch(createTodoByTaskThunk(s));
    dispatch(searchTodoByTaskThunk(TaskFilters.All));
  };
  const onChange = async (status: string) => {
    
    await dispatch(filterTodoByTaskThunk(status));
  };
  const onAction = async (status: string) => {
    
    await dispatch(deleteTodoByTaskThunk(status));
  };
  const onSearch = async (str: string) => {
    await dispatch(searchTodoByTaskThunk(str));
  };
  const onDelete = async () => {
    await dispatch(deleteTodoByTaskThunk(selectedList));
    dispatch(searchTodoByTaskThunk(TaskFilters.All));
    setSelectedList([]);
  };
  const onComplete = async () => {
    await dispatch(completeTodoByTaskThunk(selectedList));
    dispatch(searchTodoByTaskThunk(TaskFilters.All));
    setSelectedList([]);
  };
  useEffect(() => {
    dispatch(getAllTodosByThunk(""));
    console.log("......", "allTodos");
  }, []);
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    // Aggregate or log render timings...
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  }
  return (
    <>
      <Profiler id="Sidebar" onRender={onRender}>
        <div>
          <TodoForm onSubmit={onSave} />
          <div style={{ display: "flex" }}>
            <Filters onChange={onChange} />
            <Search onSearch={onSearch} />
            <TSelect
              label="Action"
              onChange={onAction}
              options={getOptionsFromEnum(ActionTodo)}
            />
          </div>

          <Tasktable />
          <TaskDetailsContainer />
        </div>
      </Profiler>
    </>
  );
}

/**
 * create a todo
 * filter a todo | search a todo | delete a todo
 * list out to do | update a todo with link
 */
