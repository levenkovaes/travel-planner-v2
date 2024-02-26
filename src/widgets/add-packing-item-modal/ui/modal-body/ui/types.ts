import { IPackingItem } from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/types";

export interface IFormValues {
  itemName: string;
  category: string;
}

export interface IItemMatch {
  category: string;
  item: IPackingItem | undefined;
}

export interface IItemMatchData {
  match: IItemMatch[];
  input: IFormValues;
}
