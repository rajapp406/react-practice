import {createSlice } from '@reduxjs/toolkit';
import { filterTodoByTaskThunk } from '../thunks/todo/filterThunk';

const todoSlice = createSlice({
    name: 'todoFilter',
    initialState: {error: null, data: [], filter: ''} as any,
    reducers: {
        filter: (state, payload) =>{
            return {...state, ...payload}
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(
            filterTodoByTaskThunk.pending,
            (state, action) => {
                
                return
            }
        )
        .addCase(
            filterTodoByTaskThunk.fulfilled,
            (state, action) => {
                state.data = action.payload as any
                state.filter = action.meta.arg;
                return
            }
        ).addCase(
            filterTodoByTaskThunk.rejected,
            (state, action) => {
                
                state.error = action.error as any
                return
            }
        )
    }
});

export const { filter } = todoSlice.actions;
export default todoSlice;