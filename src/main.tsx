import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { TodoLayout } from './layouts/TodoLayout.tsx';
import { Users } from './exercises/users/Users.tsx';
import { Tictactoe } from './exercises/tictactoe/index.ts';
import { AIchat } from './exercises/aichat/AIchat.tsx';
import { Dashboard } from './exercises/dashboard/Dashboard.tsx';
import { Budget } from './exercises/budget/Budget.tsx';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'todo',
        element: <App />
      },
      {
        path:'users',
        element: <Users/>
      },
      {
        path:'tictactoe',
        element: <Tictactoe/>
      },
      {
        path:'aichat',
        element: <AIchat/>
      },
      {
        path:'budget',
        element: <Budget/>
      }
    ]
  },

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)


