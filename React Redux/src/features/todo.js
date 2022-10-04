import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    todoAdd(state, action) {
      state.push({
        id: action.payload.id,
        todoItem: action.payload.text,
        isCompleted: false,
      });
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const { todoAdd, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
