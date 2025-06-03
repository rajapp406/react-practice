import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../../util/common.util";
import localStorageService from "../../../exercises/todo/services/localStorageService";

export const updateUserThunk = createAsyncThunk(
    'user/update',
    async (data: any, thunkAPI) => {
        console.log('......')
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(localStorageService.updateUser);
        return await h(data);
    },
    {
        condition: (id, { getState, extra }) => {
            console.log(extra, getState(), id)
            return true;
        }
    }
)