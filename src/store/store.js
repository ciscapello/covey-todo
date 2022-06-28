import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo.js/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})