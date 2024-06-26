import { IPlannerItem } from "../../../pages/planner/ui/plannerSlice/types";

export interface PlannerItemFormProps {
  item?: IPlannerItem;
  // TODO
  reducer: any;
  handleClose: () => void;
}

export type PlannerItemFormValues = {
  date: Date;
  place: string;
  activities: string;
};
