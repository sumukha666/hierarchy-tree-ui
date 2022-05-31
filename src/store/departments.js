import { createSlice } from "@reduxjs/toolkit";

const initState = {
  departmentList: [
    "Head of staff/HR",
    "Head of engineering",
    "Head of design",
  ],
};

const departmentSlice = createSlice({
  name: "departments",
  initialState: initState,
  reducers: {},
});

export default departmentSlice.reducer;
