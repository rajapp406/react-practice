import { createSlice } from "@reduxjs/toolkit";
import { deleteTodoByTaskThunk } from "../thunks/deleteThunk";

const deleteSlice = createSlice({
    name: 'todo-delete',
    initialState: {
        data: [],
        error: null,
        id: null
    },
    reducers: {
        removeTodo: (state, payload) => {
            console.log('removeTodo')
            return { ...state, ...payload };
        },
        undo: (state, payload) => {
            console.log(state, payload, 'undo');
            return { ...state, ...payload };
        },

    },
    extraReducers: (builder) => {
        builder.addCase(
            deleteTodoByTaskThunk.pending,
            (state, action) => {
                deleteSlice.actions.removeTodo('hello')
                console.log(state, action, 'pending');
                return
            }
        )
        .addCase(
            deleteTodoByTaskThunk.fulfilled,
            (state, action) => {
                console.log(state, action), 'fulfilled';
                return
            }
        ).addCase(
            deleteTodoByTaskThunk.rejected,
            (state, action) => {
                console.log(state, action), 'rejected';
                state.error = action.error as any
                return
            }
        )
    }
});

export const { removeTodo } = deleteSlice.actions;
export default deleteSlice;
