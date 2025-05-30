import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../util/common.util";
import localStorageService from "../../exercises/todo/services/localStorageService";
 

export const deleteTodoByTaskThunk = createAsyncThunk(
    'todo/delete',
    async (searchText: string, thunkAPI) => {
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(localStorageService.deleteItems);
        return await h(searchText);
    },
    {
        condition: (id, { getState, extra }) => {
            console.log(extra, getState(), id)
            return true;
        }
    }
)