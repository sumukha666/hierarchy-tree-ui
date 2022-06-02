import { createSlice } from "@reduxjs/toolkit";
import { config } from "../helpers/config";
const {
  DEPARTMENTS: { HEAD_OF_DESIGN, HEAD_OF_ENGINEERING, HEAD_OF_HR },
} = config;
const initState = {
  activeDepartment: 0,
  departmentList: [
    {
      id: 0,
      value: HEAD_OF_HR,
      depth: 1,
      isParent: true,
      showChild: false,
      childType: config.TEAMS,
    },
    {
      id: 1,
      value: HEAD_OF_ENGINEERING,
      depth: 1,
      isParent: true,
      showChild: false,
      childType: config.TEAMS,
    },
    {
      id: 2,
      value: HEAD_OF_DESIGN,
      depth: 1,
      isParent: true,
      showChild: false,
      childType: config.TEAMS,
    },
  ],
};

const departmentSlice = createSlice({
  name: "departments",
  initialState: initState,
  reducers: {
    setShowTeams: (state, action) => {
      state.departmentList[action.payload].showChild =
        !state.departmentList[action.payload].showChild;
    },
  },
});

export const { setShowTeams } = departmentSlice.actions;

export default departmentSlice.reducer;
