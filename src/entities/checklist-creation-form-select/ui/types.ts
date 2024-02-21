import { Control } from "react-hook-form";

import {
  FormSelectOptions,
  IFormValues,
} from "../../../widgets/packing-checklist-creation-form/ui/types";

export interface ChecklistCreationFormSelectProps {
  control: Control<IFormValues>;
  name: "season" | "destination";
  options: FormSelectOptions;
}
