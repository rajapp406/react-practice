import './App.css'
import { ContextProvider } from './exercises/todo/context/DataContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'
function RootProvider({children}) {
  return (
    <>
      <Provider store={store}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </Provider>

    </>

  )
}
export default RootProvider
