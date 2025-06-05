import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersByThunk } from '../../thunks/users/getAllUsersThunk';
import { Users } from '../../../models/users';
import { getUserThunk } from '../../thunks/users/getUserThunk';
import { loginUserThunk } from '../../thunks/users/loginUserThunk';

const getUserSlice = createSlice({
    name: 'user',
    initialState: { error: null, data: [] as Users[], filter: '' } as any,
    reducers: {
        filter: (state, payload) => {
            return { ...state, ...payload }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getUserThunk.pending,
                (state, action) => {
                    
                    return
                }
            )
            .addCase(
                getUserThunk.fulfilled,
                (state, action) => {
                    state.data = action.payload as Users[]
                    state.filter = action.meta.arg;
                    return
                }
            ).addCase(
                getUserThunk.rejected,
                (state, action) => {
                    
                    state.error = action.error as any
                    return
                }
            )
            .addCase(
                loginUserThunk.pending,
                (state, action) => {
                    
                    return
                }
            )
            .addCase(
                loginUserThunk.fulfilled,
                (state, action) => {
                    state.data = action.payload as Users[]
                    state.filter = action.meta.arg;
                    return
                }
            ).addCase(
                loginUserThunk.rejected,
                (state, action) => {
                    
                    state.error = action.error as any
                    return
                }
            )
    }
});

export const { filter } = getUserSlice.actions;
export default getUserSlice;