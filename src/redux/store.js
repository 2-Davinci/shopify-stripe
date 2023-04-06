import { configureStore } from "@reduxjs/toolkit";
import khenReducer from "./khenSlice";
export const store = configureStore({
  reducer: {
    khen: khenReducer,
  },
});
