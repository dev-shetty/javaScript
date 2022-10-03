import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    jumpAhead: (state, action) => {
      state.value += action.payload;
    },
    jumpBehind: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, jumpAhead, jumpBehind } =
  counterSlice.actions;
export default counterSlice.reducer;
