import { configureStore } from "@reduxjs/toolkit";
import deparmentReducer from "./departments";

export const store = configureStore({
  reducer: { department: deparmentReducer },
});
