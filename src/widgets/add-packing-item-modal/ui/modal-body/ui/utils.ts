import { IPackingChecklist } from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/types";
import { IItemMatch } from "./types";

export const findMatch = (
  enteredItem: FormDataEntryValue | string,
  checklist: IPackingChecklist | undefined
) => {
  if (!checklist) return [];

  return Object.entries(checklist.categories).reduce(
    (acc: IItemMatch[], el) => {
      if (
        el[1].find((item) => {
          return item.itemName.replace(/\s?(×|x|х)\d+$/, "") === enteredItem;
        })
      ) {
        acc.push({
          category: el[0],
          item: el[1].find(
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
