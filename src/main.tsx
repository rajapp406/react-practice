import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import { TodoLayout } from "./layouts/TodoLayout.tsx";
import { Users } from "./users/Users.tsx";
import { Tictactoe } from "./exercises/tictactoe/index.ts";
import { AIchat } from "./exercises/aichat/AIchat.tsx";
import { Dashboard } from "./exercises/dashboard/Dashboard.tsx";
import { Budget } from "./exercises/budget/Budget.tsx";
import { Login } from "./exercises/todo/components/login/Login.tsx";
import { Registration } from "./exercises/todo/components/login/Registration.tsx";
import RootProvider from "./RootProvider.tsx";
import Todo from "./exercises/todo/ToDo.tsx";
import { Typography } from "@mui/material";
import {GenericResponsiveLayout, ResponsiveLayout} from "./layouts/ResponsiveLayout.tsx";
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const router = createBrowserRouter([
  {
    path:'/',
    element: <GenericResponsiveLayout/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <RootProvider children={<Registration />} />,
      },
    ]
  },
  {
    path: "/inside",
    element: <ResponsiveLayout
  />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "todo",
        element: <RootProvider children={<Todo />} />,
      },
      {
        path: "users",
        element: <RootProvider children={<Users />} />,
      },
      {
        path: "tictactoe",
        element: <RootProvider children={<Tictactoe />} />,
      },
      {
        path: "aichat",
        element: <RootProvider children={<AIchat />} />,
      },
      {
        path: "budget",
        element: <RootProvider children={<Budget />} />,
      },
      
    ],
  },
  
  
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
