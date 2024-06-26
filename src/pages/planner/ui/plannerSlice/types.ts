import { PlannerItemFormValues } from "../../../../widgets/planner-item-addition-form/ui/types";

export interface IPlannerItem extends PlannerItemFormValues {
  id: string;
}

export interface IPlanner {
  name: string;
  id: string;
  plannerItems: IPlannerItem[];
}

export interface IPlannerState {
  list: IPlanner[];
}

export interface IAddPlannerItemAction {
  id: string | undefined;
  item: PlannerItemFormValues;
}

export interface IDeletePlannerItemAction {
  plannerId: string | undefined;
  itemId: string;
}

export interface IEditTitleAction {
  plannerId: string | undefined;
  title: string;
}
