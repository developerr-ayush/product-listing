import { configureStore } from "@reduxjs/toolkit";
import watchesSlice from "./watches/watchesSlice";
import filtersSlice from "./watches/filtersSlice";
import sortSlice from "./watches/sortSlice";

export const store = configureStore({
  reducer: {
    watches: watchesSlice,
    sort: sortSlice,
    filters: filtersSlice,
  },
});
