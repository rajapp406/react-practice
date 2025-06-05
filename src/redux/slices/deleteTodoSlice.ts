import { createSlice } from "@reduxjs/toolkit";
import { deleteTodoByTaskThunk } from "../thunks/todo/deleteThunk";

const deleteSlice = createSlice({
    name: 'todo-delete',
    initialState: {
        data: [],
        error: null,
        id: null
    },
    reducers: {
        removeTodo: (state, payload) => {
            return { ...state, ...payload };
        },
        undo: (state, payload) => {
            return { ...state, ...payload };
        },

    },
    extraReducers: (builder) => {
        builder.addCase(
            deleteTodoByTaskThunk.pending,
            (state, action) => {
                deleteSlice.actions.removeTodo('hello')
                
                return
            }
        )
        .addCase(
            deleteTodoByTaskThunk.fulfilled,
            (state, action) => {
                
                return
            }
        ).addCase(
            deleteTodoByTaskThunk.rejected,
            (state, action) => {
                
                state.error = action.error as any
                return
            }
        )
    }
});

export const { removeTodo } = deleteSlice.actions;
export default deleteSlice;
