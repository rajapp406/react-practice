import {createSlice } from '@reduxjs/toolkit';
import { Users } from '../../../exercises/users/models/users';
import { updateUserThunk } from '../../thunks/users/updateUserThunk';

const updateUserSlice = createSlice({
    name: 'updateUser',
    initialState: {error: null, data: [] as Users[], filter: ''} as any,
    reducers: {
        filter: (state, payload) =>{
            console.log(state, payload);
            return {...state, ...payload}
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(
            updateUserThunk.pending,
            (state, action) => {
                console.log(state, action, 'pending');
                return
            }
        )
        .addCase(
            updateUserThunk.fulfilled,
            (state, action) => {
                state.data = action.payload as Users[]
                state.filter = action.meta.arg;
                return
            }
        ).addCase(
            updateUserThunk.rejected,
            (state, action) => {
                state.error = action.error as any
                return
            }
        )
    }
});

export const { filter } = updateUserSlice.actions;
export default updateUserSlice;