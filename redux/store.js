import { configureStore } from "@reduxjs/toolkit";
import watchesSlice from "./watches/watchesSlice";
import filtersSlice from "./watches/filtersSlice";

export const store = configureStore({
  reducer: {
    watches: watchesSlice,
    filters: filtersSlice,
  },
});
