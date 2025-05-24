import { createAsyncThunk } from "@reduxjs/toolkit";
import localStorageService from "../../todo/services/localStorageService";
import { promisify } from "../../../util/common.util";

export const completeTodoByTaskThunk = createAsyncThunk(
    'todo/complete',
    async (searchText: string, thunkAPI) => {
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(localStorageService.completeItems);
        return await h(searchText);
    },
    {
        condition: (id, { getState, extra }) => {
            console.log(extra, getState(), id)
            return true;
        }
    }
)