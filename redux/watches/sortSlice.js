import { createSlice } from "@reduxjs/toolkit";
const initailState = {
  sortBy: "newest",
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
export default sortSlice.reducer;
