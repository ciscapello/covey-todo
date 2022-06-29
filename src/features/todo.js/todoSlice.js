import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    todos: [
        { text: 'пойти поделать всякие дела', completed: false, key: v4(), type: 1 },
        { text: 'пойти поучиться', completed: false, key: v4(), type: 2 },
        { text: 'выйти и зайти', completed: false, key: v4(), type: 4 },
    ],
    input: '',
    type: 1
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        remove: (state, action) => {
            state.todos = state.todos.filter((elem) => elem.key !== action.payload);
            console.log(state.todos);
        },
        add: (state, action) => {
            let elem = { 
                text: action.payload.trim(), 
                completed: false, 
                key: `${v4()}`, 
                type: state.type
            };
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
        typeChange: (state, action) => {
            state.type = action.payload;
        }
        // complete: (state, action) => {
        //     let todo = state.todos.find((elem, i) => i === action.payload);
        //     todo.completed = !todo.completed;
        // }
    }
})

export const { remove, add, change, edit, clear, complete, typeChange } = todoSlice.actions;
export default todoSlice.reducer;