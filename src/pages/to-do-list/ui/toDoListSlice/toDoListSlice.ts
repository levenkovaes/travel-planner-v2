import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import { TO_DO_ITEMS } from "./constants";
import {
  IAddItemAction,
  IDeleteItemAction,
  IEditItemAction,
  IToDoList,
  IToDoListState,
} from "./types";

const initialState: IToDoListState = {
  list: [],
};

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: initialState,
  reducers: {
    addToDoList: (state, action: PayloadAction<string>) => {
      const newList: IToDoList = {
        name: "To-do List",
        id: action.payload,
        items: structuredClone(TO_DO_ITEMS),
      };

      state.list.push(newList);
    },

    deleteToDoList: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },

    deleteAllToDoLists: (state) => {
      state.list = initialState.list;
    },

    addToDoItem: (state, action: PayloadAction<IAddItemAction>) => {
      console.log(action.payload);

      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        currentChecklist.items.push(action.payload.item);
      }
    },

    editToDoItem: (state, action: PayloadAction<IEditItemAction>) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        currentChecklist.items.map((el) => {
          if (el.id === action.payload.itemId) {
            el.itemName = action.payload.itemName;
          }
          return el;
        });
      }
    },

    deleteToDoItem: (state, action: PayloadAction<IDeleteItemAction>) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        currentChecklist.items = currentChecklist.items.filter(({ id }) => {
          return id !== action.payload.itemId;
        });
      }
    },

    checkToDoItem: (
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.listId
      );

      if (currentChecklist) {
        const item = currentChecklist.items.find(
          ({ id }) => id === action.payload.itemId
        );

        if (item) {
          item.isChecked = !item.isChecked;
        }
      }
    },

    removeToDoCheckmarks: (state, action: PayloadAction<string>) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload
      );

      if (currentChecklist) {
        currentChecklist.items.map((el) => {
          return (el.isChecked = false);
        });
      }
    },
  },
});

export const toDoListSliceReducer = toDoListSlice.reducer;

export const {
  addToDoList,
  deleteToDoList,
  deleteAllToDoLists,
  addToDoItem,
  editToDoItem,
  deleteToDoItem,
  checkToDoItem,
  removeToDoCheckmarks,
} = toDoListSlice.actions;

export const selectToDoLists = (state: RootState) => {
  return state.toDoList.list;
};

export const selectToDoListById = (currentId: string) => (state: RootState) => {
  return state.toDoList.list.find(({ id }) => id === currentId);
};
