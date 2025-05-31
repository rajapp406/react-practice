import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { TodoLayout } from './layouts/TodoLayout.tsx';
import Todo from './exercises/todo/ToDo.tsx';
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
        path: '/todo',
        element: <App />
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


