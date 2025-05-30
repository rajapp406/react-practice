import { Card } from "@mui/material";
import Todo from "./ToDo";
import Layout from "./components/layout/Layout";
import { TaskDetailsContainer } from "./components/taskdetails/TaskDetailsContainer";
import { TCard } from "../../elements/Card";
import React from "react";

export default function TodoRoot() {
  return (
    <TCard>
      <Todo />
      <TaskDetailsContainer />
    </TCard>
  )
}