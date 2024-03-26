import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Morning Walk" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), //nonoid generates unique id
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
      state.todos.push(action.payload);
    },
  },
});

//exporting action and reducer
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
