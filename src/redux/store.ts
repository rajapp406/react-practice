import { combineSlices, configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/todoFilterSlice'
import searchReducer from './slices/todoSearchSlice';
import crudReducer from './slices/todoDataSlice'
import deleteReducer from './slices/deleteTodoSlice'


type Comb = ReturnType<typeof combineSlices>
export const rootReducer = combineSlices(filterReducer, searchReducer, crudReducer, deleteReducer)
export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;