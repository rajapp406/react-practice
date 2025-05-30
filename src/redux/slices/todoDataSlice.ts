import { createSlice } from "@reduxjs/toolkit";
const todoDataSlice = createSlice({
    name: 'todo-form',
    initialState: {},
    reducers: {
        create: (state, payload) =>{
            return {...state, ...payload};
        },
        remove: (state, payload) =>{
            return {...state, ...payload};
        },
        complete: (state, payload) =>{
            return {...state, ...payload};
        },
        update: (state, payload) =>{
            return {...state, ...payload};
        },
        fetch: (state, payload) =>{
            return {...state, ...payload};
        },
    }
});

export const {create, complete, fetch , remove} = todoDataSlice.actions;
export default todoDataSlice;