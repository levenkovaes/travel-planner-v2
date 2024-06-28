import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import { addToDoItem } from "../../../pages/to-do-list/ui/toDoListSlice/toDoListSlice";
import ErrorMessage from "../../../shared/ui/error-message";
import {
  ModalButton,
  ModalForm,
  ModalInput,
} from "../../../shared/ui/modal/styled";
import { AddItemModalProps, IFormValues } from "./types";

const AddToDoItemModalBody: React.FC<AddItemModalProps> = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { listId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      itemName: "",
    },
  });

  const handleAddItem = ({ itemName }: IFormValues) => {
    dispatch(
      addToDoItem({
        item: { itemName: String(itemName), id: nanoid(), isChecked: false },
        checklistId: listId,
      })
    );

    handleClose();
  };

  const handleAddItemFormSubmit: SubmitHandler<IFormValues> = (data) => {
    handleAddItem({
      itemName: data.itemName,
    });
  };

  return (
    <ModalForm onSubmit={handleSubmit(handleAddItemFormSubmit)}>
      <ModalInput
        {...register("itemName", {
          required: "Item name is required",
          maxLength: {
            value: 40,
            message: "Name is too long",
          },
        })}
        autoFocus
        type="text"
        placeholder="New item"
        id="item"
        $error={!!errors.itemName}
      />
      {errors.itemName && (
        <ErrorMessage>
          <span>{errors.itemName.message}&nbsp;</span>
          <span>
            {errors.itemName.type === "maxLength" &&
              `${errors.itemName.ref?.value.length}/40`}
          </span>
        </ErrorMessage>
      )}

      <ModalButton
        type="submit"
        disabled={!dirtyFields.itemName || !!errors.itemName}
      >
        Save
      </ModalButton>
    </ModalForm>
  );
};
export default AddToDoItemModalBody;
