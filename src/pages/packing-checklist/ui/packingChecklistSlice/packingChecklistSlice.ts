import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../../app/store";
import {
  DEFAULT_PACKING_CHECKLIST,
  IF_MORE_THAN_1_TO_ADDITIONAL_EQUIP,
  IF_MORE_THAN_1_TO_CLOTHES,
  IF_MORE_THAN_1_TO_MEDS,
  IF_MORE_THAN_3_TO_MEDS,
  IF_NATURE_TO_ADDITIONAL_EQUIP,
  IF_NATURE_TO_MEDS,
  IF_NOT_WINTER_TO_ADDITIONAL_EQUIP,
  IF_SUMMER_TO_CLOTHES,
  IF_WINTER_TO_CLOTHES,
} from "./constants";
import {
  IAddItemAction,
  IAddPackingChecklistAction,
  ICheckItemAction,
  IDeleteItemAction,
  IEditItemAction,
  IPackingChecklist,
  IPackingChecklistsState,
  IRemoveCheckmarksAction,
  IСategoryIsUpdatedResetAction,
} from "./types";
import { addNumberOfItems } from "./utils";

const initialState: IPackingChecklistsState = {
  list: [],
};

export const packingChecklistsSlice = createSlice({
  name: "packingChecklists",
  initialState,
  reducers: {
    addChecklist: (
      state,
      action: PayloadAction<IAddPackingChecklistAction>
    ) => {
      const newChecklist: IPackingChecklist = structuredClone(
        DEFAULT_PACKING_CHECKLIST
      );

      newChecklist.name = action.payload.checklistName
        ? action.payload.checklistName
        : "New checklist";

      newChecklist.id = action.payload.id;

      if (!action.payload.isDefault) {
        if (action.payload.destination === "nature") {
          newChecklist.categories["personal hygiene & medicines"].data.push(
            ...IF_NATURE_TO_MEDS
          );
          newChecklist.categories["additional equipment"].data.push(
            ...IF_NATURE_TO_ADDITIONAL_EQUIP
          );
        }

        if (
          action.payload.season === "summer" ||
          action.payload.season === "spring" ||
          action.payload.season === "automn"
        ) {
          newChecklist.categories["additional equipment"].data.push(
            ...IF_NOT_WINTER_TO_ADDITIONAL_EQUIP
          );
        }

        if (
          Number(action.payload.numberOfDays) >= 1 &&
          Number(action.payload.numberOfDays) < 14
        ) {
          newChecklist.categories.clothes.data.push(
            ...IF_MORE_THAN_1_TO_CLOTHES.map((el) => {
              let item = structuredClone(el);

              if (el.itemName === "underwear" || el.itemName === "socks") {
                item.itemName = addNumberOfItems(
                  item.itemName,
                  action.payload.numberOfDays,
                  1
                );
              }

              if (el.itemName === "t-shirt") {
                item.itemName = addNumberOfItems(
                  item.itemName,
                  action.payload.numberOfDays,
                  3
                );
              }

              if (el.itemName === "jumper/hoodie/sweatshirt") {
                item.itemName = addNumberOfItems(
                  item.itemName,
                  action.payload.numberOfDays,
                  6
                );
              }

              if (el.itemName === "trousers" || el.itemName === "pajamas") {
                item.itemName = addNumberOfItems(
                  item.itemName,
                  action.payload.numberOfDays,
                  7
                );
              }

              return item;
            })
          );
        }

        if (Number(action.payload.numberOfDays) >= 14) {
          newChecklist.categories.clothes.data.push(
            ...IF_MORE_THAN_1_TO_CLOTHES.map((el) => {
              if (el.itemName === "underwear" || el.itemName === "socks") {
                el.itemName = `${el.itemName} ×14`;
              }

              if (el.itemName === "t-shirt") {
                el.itemName = `${el.itemName} ×5`;
              }

              if (el.itemName === "jumper/hoodie/sweatshirt") {
                el.itemName = `${el.itemName} ×3`;
              }

              if (el.itemName === "trousers" || el.itemName === "pajamas") {
                el.itemName = `${el.itemName} ×2`;
              }

              return el;
            })
          );
        }

        if (Number(action.payload.numberOfDays) >= 1) {
          newChecklist.categories["personal hygiene & medicines"].data.push(
            ...IF_MORE_THAN_1_TO_MEDS
          );
          newChecklist.categories["additional equipment"].data.push(
            ...IF_MORE_THAN_1_TO_ADDITIONAL_EQUIP
          );

          if (Number(action.payload.numberOfDays) >= 3) {
            newChecklist.categories["personal hygiene & medicines"].data.push(
              ...IF_MORE_THAN_3_TO_MEDS
            );
          }

          if (action.payload.season === "winter") {
            newChecklist.categories.clothes.data.push(...IF_WINTER_TO_CLOTHES);
          }

          if (action.payload.season === "summer") {
            newChecklist.categories.clothes.data.push(...IF_SUMMER_TO_CLOTHES);
          }
        }
      }

      state.list.push(newChecklist);
    },

    deleteChecklist: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },

    deleteAllChecklists: (state) => {
      state.list = initialState.list;
    },

    addItem: (state, action: PayloadAction<IAddItemAction>) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.id
      );

      if (currentChecklist) {
        currentChecklist.categories[action.payload.category].data.push(
          action.payload.item
        );
        currentChecklist.categories[action.payload.category].isUpdated = true;
      }
    },

    editItem: (state, action: PayloadAction<IEditItemAction>) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        currentChecklist.categories[action.payload.editedCategory].data.forEach(
          (el) => {
            if (el.id === action.payload.editedItem.id) {
              el.itemName = action.payload.editedItem.itemName;
            }
            return el;
          }
        );
      }
    },

    deleteItem: (state, action: PayloadAction<IDeleteItemAction>) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        currentChecklist.categories[action.payload.category].data =
          currentChecklist.categories[action.payload.category].data.filter(
            ({ id }) => {
              return id !== action.payload.itemId;
            }
          );
      }
    },

    checkItem: (state, action: PayloadAction<ICheckItemAction>) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        const item = currentChecklist.categories[
          action.payload.category
        ].data.find(({ id }) => id === action.payload.item.id);

        if (item) {
          item.isChecked = !item.isChecked;
        }
      }
    },

    removeCheckmarks: (
      state,
      action: PayloadAction<IRemoveCheckmarksAction>
    ) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        for (let key in currentChecklist.categories) {
          currentChecklist.categories[key].data.map((el) => {
            return (el.isChecked = false);
          });
        }
      }
    },

    categoryIsUpdatedReset: (
      state,
      action: PayloadAction<IСategoryIsUpdatedResetAction>
    ) => {
      const currentChecklist = state.list.find(
        ({ id }) => id === action.payload.checklistId
      );

      if (currentChecklist) {
        currentChecklist.categories[action.payload.categoryName].isUpdated =
          false;
      }
    },
  },
});

export const packingChecklistsSliceReducer = packingChecklistsSlice.reducer;

export const {
  addChecklist,
  deleteChecklist,
  deleteAllChecklists,
  addItem,
  editItem,
  deleteItem,
  checkItem,
  removeCheckmarks,
  categoryIsUpdatedReset,
} = packingChecklistsSlice.actions;

export const selectChecklists = (state: RootState) => {
  return state.packingChecklists.list;
};

export const selectChecklistById =
  (currentId: string | undefined) => (state: RootState) => {
    return state.packingChecklists.list.find(({ id }) => id === currentId);
  };
