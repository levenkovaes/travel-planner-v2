import { PlannerItemFormValues } from "../planner-item-addition-form/ui/types";

export interface PlannerItemProps extends PlannerItemFormValues {
  count: number;
  itemId: string;
}
