import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import { PlannerItemFormValues } from "../../../../widgets/planner-item-addition-form/ui/types";
import { IPlannerState } from "./types";

const initialState: IPlannerState = {
  list: [],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    addPlannerItem: (state, action: PayloadAction<PlannerItemFormValues>) => {
      state.list.push({ ...action.payload, id: nanoid() });
      state.list.sort((a, b) => {
        if (a.date < b.date) return a;
      });
    },
    editPlannerItem: (state, action: PayloadAction<string>) => {},
    deletePlannerItem: (state, action: PayloadAction<string>) => {},
    clearPlanner: (state) => {
      state.list = initialState.list;
    },
  },
});

export const plannerSliceReducer = plannerSlice.reducer;

export const {
  addPlannerItem,
  editPlannerItem,
  deletePlannerItem,
  clearPlanner,
} = plannerSlice.actions;

export const selectPlanner = (state: RootState) => {
  return state.planner.list;
};
