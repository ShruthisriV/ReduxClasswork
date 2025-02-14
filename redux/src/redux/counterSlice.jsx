import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: {
        count: 100,
        msg: "Hello"
    },
    //actions
    reducers:{
        increment: (state) => {
            state.count=state.count+1
        },
        decrement: (state) => {
            state.count = state.count-1;
        }
    }
});

export default counterSlice;