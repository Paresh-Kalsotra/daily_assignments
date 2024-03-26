import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import editReducer from "../features/todo/editSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    edit: editReducer,
  },
});
