import { IPackingItem } from "../../../pages/packing-checklist/ui/packingChecklistSlice/types";

export interface PackingItemGroupProps {
  group: [string, IPackingItem[]];
}
