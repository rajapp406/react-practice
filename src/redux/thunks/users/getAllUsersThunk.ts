import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../../util/common.util";
import localStorageService from "../../../exercises/todo/services/localStorageService";


export const getAllUsersByThunk = createAsyncThunk(
    'users/allUsers',
    async (searchText: any, thunkAPI) => {
        console.log('......', 'allUsers')
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(localStorageService.findUsers);
        return await h();
    },
    {
        condition: (id, { getState, extra }) => {
            console.log(extra, getState(), id)
            return true;
        }
    }
)