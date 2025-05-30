Create a Redux store with configureStore
1.  configureStore accepts a reducer function as a named argument
2.  configureStore automatically sets up the store with good default settings
Provide the Redux store to the React application components
1.  Put a React-Redux <Provider> component around your <App />
2.  Pass the Redux store as <Provider store={store}>
Create a Redux "slice" reducer with createSlice
1. Call createSlice with a string name, an initial state, and named reducer functions
2.  Reducer functions may "mutate" the state using Immer
3.  Export the generated slice reducer and action creators
Use the React-Redux useSelector/useDispatch hooks in React components
1.  Read data from the store with the useSelector hook
2.  Get the dispatch function with the useDispatch hook, and dispatch actions as needed