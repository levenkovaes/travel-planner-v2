import { Control } from "react-hook-form";

import { IFormValues } from "../../../widgets/add-packing-item-modal/ui/modal-body/ui/types";

export interface AddPackingItemFormSelectProps {
  control: Control<IFormValues>;
  name: "category";
  options: string[];
}
