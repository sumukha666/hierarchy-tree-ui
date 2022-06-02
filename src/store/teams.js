import { createSlice } from "@reduxjs/toolkit";
import { config } from "../helpers/config";
const {
  DEPARTMENTS: { HEAD_OF_DESIGN, HEAD_OF_ENGINEERING, HEAD_OF_HR },
} = config;

const initState = {
  activeTeam: 0,
  teamList: {
    [HEAD_OF_HR]: [
      {
        id: 0,
        value: "Team 1",
        depth: 2,
        isParent: true,
        showChild: false,
        childType: config.EMPLOYEES,
      },
      {
        id: 1,
        value: "Team 2",
        depth: 2,
        isParent: true,
        showChild: false,
        childType: config.EMPLOYEES,
      },
    ],
    [HEAD_OF_ENGINEERING]: [
      {
        id: 0,
        value: "Team 3",
        depth: 2,
        isParent: true,
        showChild: false,
        childType: config.EMPLOYEES,
      },
    ],
    [HEAD_OF_DESIGN]: [
      {
        id: 0,
        value: "Team 4",
        depth: 2,
        isParent: true,
        showChild: false,
        childType: config.EMPLOYEES,
      },
    ],
  },
};

const teamSlice = createSlice({
  name: "teams",
  initialState: initState,
  reducers: {
    setShowEmployees: (state, action) => {
      state.teamList[action.payload.parentElem.value][
        action.payload.elem.id
      ].showChild =
        !state.teamList[action.payload.parentElem.value][action.payload.elem.id]
          .showChild;
    },
  },
});

export const { setShowEmployees } = teamSlice.actions;

export default teamSlice.reducer;
