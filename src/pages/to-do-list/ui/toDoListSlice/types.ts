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

export interface IDeleteItemAction {
  checklistId: string | undefined;
  itemId: string;
}
export interface IEditItemAction {
  checklistId: string | undefined;
  itemId: string;
  itemName: string;
}

export interface IAddItemAction {
  item: {
    itemName: string;
    id: string;
    isChecked: boolean;
  };
  checklistId: string | undefined;
}
export interface IEditTitleAction {
  checklistId: string | undefined;
  title: string;
}
