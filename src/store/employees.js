import { createSlice } from "@reduxjs/toolkit";

const initState = {
  activeEmployee: 0,
  employeeList: {
    "Team 1": [
      { id: 0, value: "Emp 1", depth: 2 },
      { id: 0, value: "Emp 2", depth: 2 },
    ],
    "Team 2": [
      { id: 0, value: "Emp 3", depth: 2 },
      { id: 0, value: "Emp 4", depth: 2 },
    ],
    "Team 3": [
      { id: 0, value: "Emp 5", depth: 2 },
      { id: 0, value: "Emp 6", depth: 2 },
    ],
    "Team 4": [
      { id: 0, value: "Emp 7", depth: 2 },
      { id: 0, value: "Emp 8", depth: 2 },
    ],
  },
};

const employeeSlice = createSlice({
  name: "employees",
  initialState: initState,
  reducers: {},
});

export default employeeSlice.reducer;
