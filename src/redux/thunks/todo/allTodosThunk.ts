import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../../util/common.util";
import { localStorageService } from "../../../exercises/todo/services";


export const getAllTodosByThunk = createAsyncThunk(
    'todo/allTodos',
    async (searchText: any, thunkAPI) => {
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(localStorageService.findAll);
        return await h();
    },
    {
        condition: (id, { getState, extra }) => {
            return true;
        }
    }
)