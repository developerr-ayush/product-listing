import { createSlice } from "@reduxjs/toolkit";
const initailState = {
  sortBy: "priceLowToHigh",
};
const sortSlice = createSlice({
  name: "sort",
  initialState: initailState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});
export const { setSortBy } = sortSlice.actions;
