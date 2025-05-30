import './App.css'
import Todo from './exercises/todo/ToDo'
import React, { useContext, useState } from 'react'
import { ContextProvider, DataContext } from './exercises/todo/context/DataContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'
function App() {
  return (
    <>
      <Provider store={store}>
        <ContextProvider>
          <Todo />
        </ContextProvider>
      </Provider>

    </>

  )
}
export default App
