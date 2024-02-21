import { FormSelectOptions } from "../../../widgets/packing-checklist-creation-form/ui/types";

export interface CustomSelectProps {
  options: FormSelectOptions;
  value: string;
  onChange: (...event: any[]) => void;
}
