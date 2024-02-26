import { IPackingItem } from "../../../pages/packing-checklist/ui/packingChecklistSlice/types";

export interface EditItemModalProps {
  handleClose: () => void;
  item: IPackingItem;
  groupName: string;
}
