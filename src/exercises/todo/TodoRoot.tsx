import { Card } from "@mui/material";
import Todo from "./ToDo";
import Layout from "./components/layout/Layout";
import { TaskDetailsContainer } from "./components/taskdetails/TaskDetailsContainer";
import { TCard } from "../../elements/Card";
import React, { useEffect } from "react";
import { getAllTodosByThunk } from "src/redux/thunks/allTodosThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/redux/store";

export default function TodoRoot() {
  const dispatch: AppDispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllTodosByThunk(''));
    console.log('......', 'allTodos')

  },[])
  return (
    <TCard>
      <Todo />
      <TaskDetailsContainer />
    </TCard>
  )
}