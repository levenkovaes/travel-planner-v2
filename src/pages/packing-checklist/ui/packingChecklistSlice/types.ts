export type IPackingItem = {
  itemName: string;
  id: string;
  isChecked: boolean;
};

export type IPackingChecklist = {
  name: string;
  id: string | null;
  categories: Record<string, IPackingItem[]>;
};

export type IPackingChecklistsState = {
  list: IPackingChecklist[];
};

export interface IAddPackingChecklistAction {
  checklistName: string;
  id: string;
  isDefault: boolean;
  numberOfDays: number;
  season: string;
  destination: string;
}

export interface IAddItemAction {
  item: {
    itemName: string;
    id: string;
    isChecked: boolean;
  };
  category: string;
  id: string | undefined;
}

export interface IEditItemAction {
  checklistId: string | undefined;
  editedCategory: string;
  editedItem: {
    itemName: string;
    id: string;
  };
}

export interface IDeleteItemAction {
  checklistId: string | undefined;
  category: string;
  itemId: string;
}

export interface ICheckItemAction {
  checklistId: string | undefined;
  category: string;
  item: IPackingItem;
}

export interface IRemoveCheckmarksAction {
  checklistId: string | undefined;
}
