export interface IToDoItem {
  itemName: string;
  id: string;
  isChecked: boolean;
}

export interface IToDoListState {
  toDoList: IToDoItem[];
}
