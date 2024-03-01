import { IPackingChecklist } from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/types";
import { IItemMatch } from "./types";

export const findMatch = (
  enteredItem: FormDataEntryValue | string,
  checklist: IPackingChecklist | undefined
) => {
  if (!checklist) return [];

  return Object.entries(checklist.categories).reduce(
    (acc: IItemMatch[], [groupName, { data }]) => {
      if (
        data.find((item) => {
          return item.itemName.replace(/\s?(×|x|х)\d+$/, "") === enteredItem;
        })
      ) {
        acc.push({
          category: groupName,
          item: data.find(
            (item) =>
              item.itemName.replace(/\s?(×|x|х)\d+$/, "") === enteredItem
          ),
        });
      }
      return acc;
    },
    []
  );
};
