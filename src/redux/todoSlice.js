import { createSlice } from "@reduxjs/toolkit";

const sliceTodo = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    loadFromStorage: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addTodo, toggleTodo, deleteTodo } = sliceTodo.actions;
export default sliceTodo.reducer;
