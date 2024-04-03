import { PlannerItemFormValues } from "../../../../widgets/planner-item-addition-form/ui/types";

export interface IPlannerItem extends PlannerItemFormValues {
  id: string;
}

export interface IPlannerState {
  list: IPlannerItem[];
}
