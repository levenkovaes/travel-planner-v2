import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { nanoid } from "@reduxjs/toolkit";

import {
  checkToDoItem,
  deleteToDoItem,
  editToDoItem,
} from "../../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";
import { IToDoItem } from "../../../pages/to-do-list/ui/toDoListSlice/types";
import BlankCheckbox from "../../../shared/ui/assets/icons/check_box_blank.svg";
import CheckedCheckbox from "../../../shared/ui/assets/icons/check_box_checked.svg";
import EditIcon from "../../../shared/ui/assets/icons/edit.svg";
import { TransparentIconButton } from "../../../shared/ui/button";
import { DeleteIconButton } from "../../../shared/ui/button/delete-icon/ui";
import { CustomCheckbox } from "../../../shared/ui/custom-checkbox";
import { SmallerParagraph } from "../../../shared/ui/typography";
import {
  EditErrorMessage,
  EditForm,
  EditInput,
  ItemButtonContainer,
  ItemWrapper,
  ToDoItemContainer,
} from "./styled";
import { IFormValues } from "./types";

const ToDoItem: React.FC<{ item: IToDoItem; listId: string }> = ({
  item,
  listId,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      itemName: item.itemName,
    },
  });

  const handleCheck = () => {
    dispatch(checkToDoItem({ itemId: item.id, listId }));
  };

  const handleDeleteItem = () => {
    const notify = () =>
      toast.info("Item has been removed!", {
        autoClose: 500,
        hideProgressBar: true,
        progress: undefined,
      });

    notify();
    dispatch(
      deleteToDoItem({
        checklistId: listId,
        itemId: item.id,
      })
    );
  };

  const handleStartEditItem = () => setIsEditing(true);

  const handleEditItem = ({ itemName }: IFormValues) => {
    dispatch(
      editToDoItem({
        itemName: String(itemName),
        itemId: item.id,
        checklistId: listId,
      })
    );

    setIsEditing(false);
  };

  const handleEditItemFormSubmit: SubmitHandler<IFormValues> = (data) => {
    handleEditItem({
      itemName: data.itemName,
    });
  };

  return (
    <ToDoItemContainer key={nanoid()}>
      <CustomCheckbox onClick={handleCheck}>
        {item.isChecked ? <CheckedCheckbox /> : <BlankCheckbox />}
      </CustomCheckbox>

      <ItemWrapper>
        {isEditing ? (
          <EditForm onSubmit={handleSubmit(handleEditItemFormSubmit)}>
            <EditInput
              placeholder={item.itemName}
              {...register("itemName", {
                required: "Item name is required",
                maxLength: {
                  value: 40,
                  message: "Name is too long",
                },
              })}
              autoFocus
              type="text"
              id="item"
              $error={!!errors.itemName}
            />

            {errors.itemName && (
              <EditErrorMessage>
                <span>{errors.itemName.message}&nbsp;</span>
                <span>
                  {errors.itemName.type === "maxLength" &&
                    `${errors.itemName.ref?.value.length}/40`}
                </span>
              </EditErrorMessage>
            )}
          </EditForm>
        ) : (
          <SmallerParagraph as="label" htmlFor={item.id} key={item.id}>
            {item.itemName}
          </SmallerParagraph>
        )}

        <ItemButtonContainer isHidden={isEditing}>
          <TransparentIconButton onClick={handleStartEditItem}>
            <EditIcon />
          </TransparentIconButton>
          <DeleteIconButton handleClick={handleDeleteItem} />
        </ItemButtonContainer>
      </ItemWrapper>
    </ToDoItemContainer>
  );
};

export default ToDoItem;
