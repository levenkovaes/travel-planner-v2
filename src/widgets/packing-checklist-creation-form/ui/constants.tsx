import { FormSelectOptions, IFormValues } from "./types";

export const SEASON_OPTIONS: FormSelectOptions = [
  "-",
  "winter",
  "spring",
  "summer",
  "autumn",
];

export const DESTINATION_OPTIONS: FormSelectOptions = ["-", "city", "nature"];

export const FORM_DEFAULT_VALUES: IFormValues = {
  checklistName: "",
  numberOfDays: "",
  season: "-",
  destination: "-",
};
