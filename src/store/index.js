import { configureStore } from "@reduxjs/toolkit";
import deparmentReducer from "./departments";
import employeeReducer from "./employees";
import teamsReducer from "./teams";

export const store = configureStore({
  reducer: {
    departments: deparmentReducer,
    teams: teamsReducer,
    employees: employeeReducer,
  },
});
