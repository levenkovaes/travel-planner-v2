import { nanoid } from "@reduxjs/toolkit";

import { IPackingChecklist, IPackingItem } from "./types";

export const DEFAULT_PACKING_CHECKLIST: IPackingChecklist = {
  name: "New checklist",
  id: null,
  categories: {
    clothes: {
      isUpdated: false,
      data: [
        { itemName: "glasses", id: nanoid(), isChecked: false },
        { itemName: "headwear", id: nanoid(), isChecked: false },
      ],
    },

    "documents & cash": {
      isUpdated: false,
      data: [
        { itemName: "wallet", id: nanoid(), isChecked: false },
        { itemName: "international passport", id: nanoid(), isChecked: false },
        { itemName: "driver's license", id: nanoid(), isChecked: false },
        { itemName: "medical insurance", id: nanoid(), isChecked: false },
        { itemName: "copies of documents", id: nanoid(), isChecked: false },
        { itemName: "tickets", id: nanoid(), isChecked: false },
        { itemName: "map", id: nanoid(), isChecked: false },
      ],
    },

    "personal hygiene & medicines": {
      isUpdated: false,
      data: [
        { itemName: "adhesive plaster", id: nanoid(), isChecked: false },
        { itemName: "handkerchiefs", id: nanoid(), isChecked: false },
        { itemName: "hand sanitizer", id: nanoid(), isChecked: false },
        { itemName: "painkillers", id: nanoid(), isChecked: false },
        { itemName: "allergy remedy", id: nanoid(), isChecked: false },
      ],
    },

    supplies: {
      isUpdated: false,
      data: [
        { itemName: "water", id: nanoid(), isChecked: false },
        { itemName: "dried fruits", id: nanoid(), isChecked: false },
        { itemName: "nut bars", id: nanoid(), isChecked: false },
        { itemName: "chewing gum", id: nanoid(), isChecked: false },
      ],
    },

    "additional equipment": {
      isUpdated: false,
      data: [
        { itemName: "backpack", id: nanoid(), isChecked: false },
        { itemName: "shopping bag", id: nanoid(), isChecked: false },
        { itemName: "small bag", id: nanoid(), isChecked: false },
      ],
    },

    electronics: {
      isUpdated: false,
      data: [
        { itemName: "phone", id: nanoid(), isChecked: false },
        { itemName: "wrist watch", id: nanoid(), isChecked: false },
        { itemName: "headphones", id: nanoid(), isChecked: false },
        { itemName: "power bank", id: nanoid(), isChecked: false },
        { itemName: "chargers", id: nanoid(), isChecked: false },
      ],
    },
  },
};

export const IF_SUMMER_TO_CLOTHES: IPackingItem[] = [
  { itemName: "shorts", id: nanoid(), isChecked: false },
];

export const IF_WINTER_TO_CLOTHES: IPackingItem[] = [
  { itemName: "thermal underwear", id: nanoid(), isChecked: false },
];

export const IF_NOT_WINTER_TO_ADDITIONAL_EQUIP: IPackingItem[] = [
  { itemName: "sunglasses", id: nanoid(), isChecked: false },
  { itemName: "sunscreen", id: nanoid(), isChecked: false },
  { itemName: "umbrella/raincoat", id: nanoid(), isChecked: false },
];

export const IF_MORE_THAN_1_TO_CLOTHES: IPackingItem[] = [
  { itemName: "underwear", id: nanoid(), isChecked: false },
  { itemName: "socks", id: nanoid(), isChecked: false },
  { itemName: "t-shirt", id: nanoid(), isChecked: false },
  { itemName: "jumper/hoodie/sweatshirt", id: nanoid(), isChecked: false },
  { itemName: "trousers", id: nanoid(), isChecked: false },
  { itemName: "pajamas", id: nanoid(), isChecked: false },
  { itemName: "jacket", id: nanoid(), isChecked: false },
  { itemName: "shoes", id: nanoid(), isChecked: false },
];

export const IF_MORE_THAN_1_TO_MEDS: IPackingItem[] = [
  { itemName: "toothpaste", id: nanoid(), isChecked: false },
  { itemName: "toothbrush", id: nanoid(), isChecked: false },
  { itemName: "dental floss", id: nanoid(), isChecked: false },
  { itemName: "shampoo", id: nanoid(), isChecked: false },
  { itemName: "shower gel", id: nanoid(), isChecked: false },
  { itemName: "moisturizing cream", id: nanoid(), isChecked: false },
  { itemName: "deodorant", id: nanoid(), isChecked: false },
  { itemName: "perfume", id: nanoid(), isChecked: false },
  { itemName: "razor", id: nanoid(), isChecked: false },
];

export const IF_MORE_THAN_1_TO_ADDITIONAL_EQUIP: IPackingItem[] = [
  { itemName: "sleep mask", id: nanoid(), isChecked: false },
];

export const IF_MORE_THAN_3_TO_MEDS: IPackingItem[] = [
  { itemName: "nail file / scissors", id: nanoid(), isChecked: false },
];

export const IF_NATURE_TO_MEDS: IPackingItem[] = [
  { itemName: "antiseptic", id: nanoid(), isChecked: false },
  { itemName: "tick remover tool", id: nanoid(), isChecked: false },
];

export const IF_NATURE_TO_ADDITIONAL_EQUIP: IPackingItem[] = [
  { itemName: "pocketknife", id: nanoid(), isChecked: false },
  { itemName: "flashlight", id: nanoid(), isChecked: false },
  { itemName: "insect repellent", id: nanoid(), isChecked: false },
  { itemName: "whistle", id: nanoid(), isChecked: false },
  { itemName: "sports gear", id: nanoid(), isChecked: false },
];
