import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "counter";

const initialState = { count: 0, step: 1 };

const counterSlice = createSlice({
  initialState,
  name: SLICE_NAME,
  reducers: {
    decrement(state) {
      const { count, step } = state;
      state.count = count - step;
    },
    increment(state) {
      const { count, step } = state;
      state.count = count + step;
    },
    setStep(state, { payload }) {
      state.step = payload;
    },
  },
});

const { reducer } = counterSlice;
export default reducer;

console.log(counterSlice);
