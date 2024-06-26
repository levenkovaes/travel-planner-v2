import dayjs from "dayjs";

import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import {
  IAddPlannerItemAction,
  IDeletePlannerItemAction,
  IPlanner,
  IPlannerState,
} from "./types";

const initialState: IPlannerState = {
  list: [],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    addPlanner: (state, action: PayloadAction<string>) => {
      const newPlanner: IPlanner = {
        name: "My Trip",
        id: action.payload,
        plannerItems: [],
      };

      state.list.push(newPlanner);
    },
    addPlannerItem: (state, action: PayloadAction<IAddPlannerItemAction>) => {
      const currentPlanner = state.list.find(
        ({ id }) => id === action.payload.id
      );

      if (currentPlanner) {
        currentPlanner.plannerItems.push({
          ...action.payload.item,
          id: nanoid(),
        });
        currentPlanner.plannerItems.sort((a, b) =>
          dayjs(a.date).diff(dayjs(b.date))
        );
      }
    },
    editPlannerItem: (state, action: PayloadAction<string>) => {},
    deletePlannerItem: (
      state,
      action: PayloadAction<IDeletePlannerItemAction>
    ) => {
      const currentPlanner = state.list.find(
        ({ id }) => id === action.payload.plannerId
      );

      if (currentPlanner) {
        currentPlanner.plannerItems = currentPlanner.plannerItems.filter(
          ({ id }) => {
            return id !== action.payload.itemId;
          }
        );
      }
    },
    clearPlanner: (state, action: PayloadAction<string | undefined>) => {
      const currentPlanner = state.list.find(({ id }) => id === action.payload);

      if (currentPlanner) {
        currentPlanner.plannerItems = [];
      }
    },
    clearPlanners: (state) => {
      state.list = initialState.list;
    },
  },
});

export const plannerSliceReducer = plannerSlice.reducer;

export const {
  addPlanner,
  addPlannerItem,
  editPlannerItem,
  deletePlannerItem,
  clearPlanner,
  clearPlanners,
} = plannerSlice.actions;

export const selectPlanners = (state: RootState) => {
  return state.planner.list;
};

export const selectPlannerById =
  (currentId: string | undefined) => (state: RootState) => {
    return state.planner.list.find(({ id }) => id === currentId);
  };
