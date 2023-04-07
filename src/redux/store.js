import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "react-persist";
import khenReducer from "./khenSlice";
export const store = configureStore({
  reducer: {
    khen: khenReducer,
  },
});
