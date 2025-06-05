import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../../util/common.util";
import { userService } from "../../../exercises/todo/services";

export const updateUserThunk = createAsyncThunk(
    'user/update',
    async (data: any, thunkAPI) => {
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(userService.updateUser);
        return await h(data);
    },
    {
        condition: (id, { getState, extra }) => {
            return true;
        }
    }
)