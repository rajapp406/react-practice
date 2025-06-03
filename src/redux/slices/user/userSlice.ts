import {createSlice } from '@reduxjs/toolkit';
import { getAllUsersByThunk } from '../../thunks/users/getAllUsersThunk';
import { Users } from '../../../exercises/users/models/users';
import { getUserThunk } from '../../thunks/users/getUserThunk';

const userSlice = createSlice({
    name: 'allUsers',
    initialState: {error: null, data: [] as Users[], filter: ''} as any,
    reducers: {
        filter: (state, payload) =>{
            console.log(state, payload);
            return {...state, ...payload}
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(
            getAllUsersByThunk.pending,
            (state, action) => {
                console.log(state, action, 'pending');
                return
            }
        )
        .addCase(
            getAllUsersByThunk.fulfilled,
            (state, action) => {
                console.log(state, action, 'fulfilled', 'filterTodoByTaskThunk');
                state.data = action.payload as Users[]
                state.filter = action.meta.arg;
                return
            }
        ).addCase(
            getAllUsersByThunk.rejected,
            (state, action) => {
                console.log(state, action), 'rejected';
                state.error = action.error as any
                return
            }
        )
        
    }
});

export const { filter } = userSlice.actions;
export default userSlice;