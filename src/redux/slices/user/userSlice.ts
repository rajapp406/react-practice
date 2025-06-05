import {createSlice } from '@reduxjs/toolkit';
import { getAllUsersByThunk } from '../../thunks/users/getAllUsersThunk';
import { Users } from '../../../models/users';
import { getUserThunk } from '../../thunks/users/getUserThunk';

const userSlice = createSlice({
    name: 'allUsers',
    initialState: {error: null, data: [] as Users[], filter: ''} as any,
    reducers: {
        filter: (state, payload) =>{
            return {...state, ...payload}
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(
            getAllUsersByThunk.pending,
            (state, action) => {
                return
            }
        )
        .addCase(
            getAllUsersByThunk.fulfilled,
            (state, action) => {
                state.data = action.payload as Users[]
                state.filter = action.meta.arg;
                return
            }
        ).addCase(
            getAllUsersByThunk.rejected,
            (state, action) => {
                state.error = action.error as any
                return
            }
        )
        
    }
});

export const { filter } = userSlice.actions;
export default userSlice;