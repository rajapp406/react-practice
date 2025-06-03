import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../../util/common.util";
import localStorageService from "../../../exercises/todo/services/localStorageService";


export const createTodoByTaskThunk = createAsyncThunk(
    'todo/create',
    async (searchText: any, thunkAPI) => {
        console.log('......')
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(localStorageService.saveItem);
        return await h(searchText);
    },
    {
        condition: (id, { getState, extra }) => {
            console.log(extra, getState(), id)
            return true;
        }
    }
)