import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watches: [],
};

const watchesSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.watches = action.payload;
    },
  },
});

export const { setData } = watchesSlice.actions;

export default watchesSlice.reducer;
