import MenuCardProps, { CardTitleEnum } from "./types";

export const MENU_CARD_CONTENT: MenuCardProps[] = [
  {
    title: CardTitleEnum.Planner,
    description: "Create and share your travel plans.",
    addLink: "/planner",
    previousLink: "/planners",
  },
  {
    title: CardTitleEnum.ToDo,
    description: "Create a to-do list.",
    addLink: "/to-do-list",
    previousLink: "/to-do-lists",
  },
  {
    title: CardTitleEnum.PackingList,
    description: "Create a packing list.",
    addLink: "/create-packing-checklist",
    previousLink: "/packing-checklists",
  },
];
