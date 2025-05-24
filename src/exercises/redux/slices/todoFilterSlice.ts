import {createSlice } from '@reduxjs/toolkit';
import { filterTodoByTaskThunk } from '../thunks/filterThunk';

const todoSlice = createSlice({
    name: 'todoFilter',
    initialState: {error: null, data: [], filter: ''} as any,
    reducers: {
        filter: (state, payload) =>{
            console.log(state, payload);
            return {...state, ...payload}
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(
            filterTodoByTaskThunk.pending,
            (state, action) => {
                console.log(state, action, 'pending');
                return
            }
        )
        .addCase(
            filterTodoByTaskThunk.fulfilled,
            (state, action) => {
                console.log(state, action, 'fulfilled', 'filterTodoByTaskThunk');
                state.data = action.payload as any
                state.filter = action.meta.arg;
                return
            }
        ).addCase(
            filterTodoByTaskThunk.rejected,
            (state, action) => {
                console.log(state, action), 'rejected';
                state.error = action.error as any
                return
            }
        )
    }
});

export const { filter } = todoSlice.actions;
export default todoSlice;