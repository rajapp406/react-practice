import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../../util/common.util";
import { userService } from "../../../exercises/todo/services";


export const getAllUsersByThunk = createAsyncThunk(
    'users/allUsers',
    async (searchText: any, thunkAPI) => {
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(userService.findUsers);
        return await h();
    },
    {
        condition: (id, { getState, extra }) => {
            return true;
        }
    }
)