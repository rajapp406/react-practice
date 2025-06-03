import filterReducer from './slices/todoFilterSlice'
import searchReducer from './slices/todoSearchSlice';
import crudReducer from './slices/todoDataSlice'
import deleteReducer from './slices/deleteTodoSlice'
import usersReducer from './slices/user/userSlice'
import getuserReducer from './slices/user/getUserSlice'
import updateUserReducer from './slices/user/updateUserSlice'
export const reducers = [
    filterReducer,
    searchReducer,
    crudReducer,
    deleteReducer,
    usersReducer,
    getuserReducer,
    updateUserReducer
]