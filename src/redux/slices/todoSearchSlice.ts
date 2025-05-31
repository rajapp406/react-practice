import { createSlice } from "@reduxjs/toolkit";
import { searchTodoByTaskThunk } from "../thunks/searchThunk";
import { getAllTodosByThunk } from "../thunks/allTodosThunk";

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
            console.log(state, payload);
            return { ...state, ...payload };
        },

    },
    extraReducers: (builder) => {
        builder.addCase(
            searchTodoByTaskThunk.pending,
            (state, action) => {
                console.log(state, action, 'pending');
                return
            }
        )
        .addCase(
            searchTodoByTaskThunk.fulfilled,
            (state, action) => {
                console.log(state, action), 'fulfilled';
                state.data = [...action.payload] as any
                state.searchQuery = action.meta.arg;
                return
            }
        ).addCase(
            searchTodoByTaskThunk.rejected,
            (state, action) => {
                console.log(state, action), 'rejected';
                state.error = action.error as any
                return
            }
        ).addCase(
            getAllTodosByThunk.pending,
            (state, action) => {
                console.log(state, action, 'pending');
                return
            }
        )
        .addCase(
            getAllTodosByThunk.fulfilled,
            (state, action) => {
                console.log(state, action), 'fulfilled';
                state.data = [...action.payload] as any
                state.searchQuery = action.meta.arg;
                return
            }
        ).addCase(
            getAllTodosByThunk.rejected,
            (state, action) => {
                console.log(state, action), 'rejected';
                state.error = action.error as any
                return
            }
        )
    }
});

export const { search } = searchSlice.actions;
export default searchSlice;
