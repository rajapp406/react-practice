import { createSlice } from "@reduxjs/toolkit";
import { searchTodoByTaskThunk } from "../thunks/todo/searchThunk";
import { getAllTodosByThunk } from "../thunks/todo/allTodosThunk";

const searchSlice = createSlice({
    name: 'todoSearch',
    initialState: {
        data: [],
        error: null,
        id: null,
        searchQuery: ''
    } as any,
    reducers: {
        search: (state, payload) => {
            return { ...state, ...payload };
        },

    },
    extraReducers: (builder) => {
        builder.addCase(
            searchTodoByTaskThunk.pending,
            (state, action) => {
                
                return
            }
        )
        .addCase(
            searchTodoByTaskThunk.fulfilled,
            (state, action) => {
                
                state.data = [...action.payload] as any
                state.searchQuery = action.meta.arg;
                return
            }
        ).addCase(
            searchTodoByTaskThunk.rejected,
            (state, action) => {
                
                state.error = action.error as any
                return
            }
        ).addCase(
            getAllTodosByThunk.pending,
            (state, action) => {
                
                return
            }
        )
        .addCase(
            getAllTodosByThunk.fulfilled,
            (state, action) => {
                
                state.data = [...action.payload] as any
                state.searchQuery = action.meta.arg;
                return
            }
        ).addCase(
            getAllTodosByThunk.rejected,
            (state, action) => {
                
                state.error = action.error as any
                return
            }
        )
    }
});

export const { search } = searchSlice.actions;
export default searchSlice;
