import { PlannerItemFormValues } from "../../../../widgets/planner-item-form/ui/types";

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
  plannerId: string | undefined;
  item: PlannerItemFormValues;
}

export interface IEditPlannerItemAction {
  plannerId: string | undefined;
  item: PlannerItemFormValues;
  itemId: string | undefined;
}

export interface IDeletePlannerItemAction {
  plannerId: string | undefined;
  itemId: string;
}

export interface IEditTitleAction {
  plannerId: string | undefined;
  title: string;
}
