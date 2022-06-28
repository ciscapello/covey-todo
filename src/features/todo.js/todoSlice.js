import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    todos: [
        { text: 'пойти поделать всякие дела', completed: false, key: v4() },
        { text: 'пойти поучиться', completed: false, key: v4() },
        { text: 'выйти и зайти', completed: false, key: v4() },
    ],
    input: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        remove: (state, action) => {
            state.todos = state.todos.filter((elem, i) => i !== action.payload);
            console.log(state.todos);
        },
        add: (state, action) => {
            let elem = { text: action.payload.trim(), completed: false, key: `${v4()}` };
            state.todos.push(elem);
        },
        edit: (state, action) => {
            state.input = state.todos[action.payload].text;
            state.todos = state.todos.filter((elem, i) => i !== action.payload);
        },
        clear: (state, action) => {
            state.input = '';
        },
        change: (state, action) => {
            state.input = action.payload
        },
        // complete: (state, action) => {
        //     let todo = state.todos.find((elem, i) => i === action.payload);
        //     todo.completed = !todo.completed;
        // }
    }
})

export const { remove, add, change, edit, clear, complete } = todoSlice.actions;
export default todoSlice.reducer;