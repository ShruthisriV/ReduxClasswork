import {createSlice} from "@reduxjs/toolkit"

const TodoSlice = createSlice({
    name: "taskbox",
    initialState: {
        value: "", //value and todoList entered value will appear in the web page
        todoList: ["revise JS"]
    },
    reducers:{
        setValue: (state, action, str) => {
            console.log(str);

            let newValue = action.payload;
            state.value = newValue;
            //payload, type -> slice/methodname
        },
        addTask: (state, action) => {
            let task = action.payload;
            let updatedTaskList = [...state.todoList, task];
            state.todoList = updatedTaskList;
            state.value = "";
        }
    }
})

export default TodoSlice