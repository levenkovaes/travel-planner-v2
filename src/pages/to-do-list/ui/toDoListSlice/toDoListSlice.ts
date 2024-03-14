import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import { TO_DO_ITEMS } from "./constants";
import { IToDoListState } from "./types";

const initialState: IToDoListState = {
  toDoList: TO_DO_ITEMS,
};

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: initialState,
  reducers: {
    checkToDoItem: (state, action: PayloadAction<string>) => {
      const item = state.toDoList.find(({ id }) => id === action.payload);

      if (item) {
        item.isChecked = !item.isChecked;
      }
    },

    removeToDoCheckmarks: (state) => {
      state.toDoList.forEach((el) => {
        return (el.isChecked = false);
      });
    },
  },
});

export const toDoListSliceReducer = toDoListSlice.reducer;

export const { checkToDoItem, removeToDoCheckmarks } = toDoListSlice.actions;

export const selectToDoList = () => (state: RootState) => {
  console.log(state.toDoList);
  return state.toDoList.toDoList;
};
