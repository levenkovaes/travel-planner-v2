import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

import { IPlannerItem } from "../../../pages/planner/ui/plannerSlice/types";

export interface PlannerItemFormProps {
  item?: IPlannerItem;
  action: ActionCreatorWithPayload<any, any>;
  handleClose: () => void;
}

export type PlannerItemFormValues = {
  date: Date;
  place: string;
  activities: string;
};
