export interface PlannerItemAdditionFormProps {
  handleClose: () => void;
}

export type PlannerItemFormValues = {
  date: Date;
  place: string;
  activities: string;
};
