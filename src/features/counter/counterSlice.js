import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {},
});

export const { increment, decrement } = counterSlice.reducers;

export default counterSlice.reducer;
