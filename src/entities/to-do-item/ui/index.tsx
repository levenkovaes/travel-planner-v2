import React from "react";
import { useDispatch } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";

import { checkToDoItem } from "../../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";
import { IToDoItem } from "../../../pages/to-do-list/ui/toDoListSlice/types";
import BlankCheckbox from "../../../shared/ui/assets/icons/check_box_blank.svg";
import CheckedCheckbox from "../../../shared/ui/assets/icons/check_box_checked.svg";
import { CustomCheckbox } from "../../../shared/ui/custom-checkbox";
import { SmallerParagraph } from "../../../shared/ui/typography";
import { ToDoItemContainer } from "./styled";

const ToDoItem: React.FC<{ item: IToDoItem; listId: string }> = ({
  item,
  listId,
}) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(checkToDoItem({ itemId: item.id, listId }));
  };

  return (
    <ToDoItemContainer key={nanoid()}>
      <CustomCheckbox onClick={handleCheck}>
        {item.isChecked ? <CheckedCheckbox /> : <BlankCheckbox />}
      </CustomCheckbox>

      <SmallerParagraph as="label" htmlFor={item.id} key={item.id}>
        {item.itemName}
      </SmallerParagraph>
    </ToDoItemContainer>
  );
};

export default ToDoItem;
