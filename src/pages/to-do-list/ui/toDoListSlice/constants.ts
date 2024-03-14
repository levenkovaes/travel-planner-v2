import { nanoid } from "@reduxjs/toolkit";

export const TO_DO_ITEMS = [
  { itemName: "water plants", id: nanoid(), isChecked: false },
  {
    itemName: "turn off the water",
    id: nanoid(),
    isChecked: false,
  },
  {
    itemName: "turn off electrical appliances",
    id: nanoid(),
    isChecked: false,
  },
  { itemName: "close windows", id: nanoid(), isChecked: false },
  { itemName: "close doors", id: nanoid(), isChecked: false },
];
