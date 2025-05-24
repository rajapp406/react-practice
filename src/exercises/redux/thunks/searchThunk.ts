import { createAsyncThunk } from "@reduxjs/toolkit";
import localStorageService from "../../todo/services/localStorageService";
import { promisify } from "../../../util/common.util";

export const searchTodoByTaskThunk = createAsyncThunk(
    'todo/search',
    async (searchText: string, thunkAPI: any) => {
        const h: any = await promisify(localStorageService.findItemsByTask);
        return await h(searchText);
    },
    {
        condition: (id, { getState, extra }) => {
            console.log(extra)
            return true;
        }
    }
)