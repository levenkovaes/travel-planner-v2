export interface IToDoItem {
  itemName: string;
  id: string;
  isChecked: boolean;
}

export interface IToDoListState {
  list: IToDoList[];
}

export interface IToDoList {
  name: string;
  id: string;
  items: IToDoItem[];
}
