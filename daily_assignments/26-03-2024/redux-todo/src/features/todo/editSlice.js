import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "edit",
  initialState: {
    editId: null,
  },
  reducers: {
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
  },
});

export const { setEditId } = todoSlice.actions;

export default todoSlice.reducer;
