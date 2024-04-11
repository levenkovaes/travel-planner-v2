interface MenuCardProps {
  title: string;
  description: string;
  addLink: string;
  previousLink: string;
}

export enum CardTitleEnum {
  Planner = "Planner",
  ToDo = "To-do list",
  PackingList = "Packing checklist",
}

export default MenuCardProps;
