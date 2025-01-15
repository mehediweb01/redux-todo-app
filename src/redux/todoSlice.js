import { createSlice } from "@reduxjs/toolkit";

const sliceTodo = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn typescript", completed: true },
    { id: 3, text: "Learn redux", completed: false },
  ],
  reducers: {},
});

export default sliceTodo.reducer;
