import { createAsyncThunk } from "@reduxjs/toolkit";
import { promisify } from "../../../util/common.util";
import { userService } from "../../../exercises/todo/services";


export const getUserThunk = createAsyncThunk(
    'user/getuser',
    async (id: any, thunkAPI) => {
        //dispatch(removeTodo('b7154c30-fc0f-40cc-ba64-076ced21ca63'))
        const h: any = await promisify(userService.findUserById);
        return await h(id);
    },
    {
        condition: (id, { getState, extra }) => {
            return true;
        }
    }
)