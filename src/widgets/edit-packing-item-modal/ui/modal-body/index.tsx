import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import {
  editItem,
  selectChecklistById,
} from "../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { LongButton } from "../../../../shared/ui/button";
import ErrorMessage from "../../../../shared/ui/error-message";
import Input from "../../../../shared/ui/input";
import { SmallerParagraph } from "../../../../shared/ui/typography";
import { ItemMatchModalBody } from "../../../add-packing-item-modal/ui/modal-body/ui/styled";
import { IItemMatchData } from "../../../add-packing-item-modal/ui/modal-body/ui/types";
import { findMatch } from "../../../add-packing-item-modal/ui/modal-body/ui/utils";
import { EditItemModalProps } from "../types";
import { IFormValues } from "./types";

const EditPackingItemModalBody: React.FC<EditItemModalProps> = ({
  handleClose,
  item,
  groupName,
}) => {
  const dispatch = useDispatch();
  const { checklistId } = useParams();
  const checklist = useSelector(selectChecklistById(checklistId));

  const [itemMatch, setItemMatch] = useState<false | IItemMatchData>(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      itemName: item.itemName,
    },
  });

  const watchItemName = watch("itemName");

  const handleEditItem = (data: IFormValues) => {
    dispatch(
      editItem({
        checklistId,
        editedCategory: groupName,
        editedItem: { ...item, itemName: data.itemName },
      })
    );
    handleClose();
  };

  const handleEditItemFormSubmit: SubmitHandler<IFormValues> = (data) => {
    if (
      !findMatch(data.itemName, checklist) ||
      findMatch(data.itemName, checklist).length === 0
    ) {
      handleEditItem(data);
    } else {
      setItemMatch(() => {
        return {
          match: findMatch(data.itemName, checklist),
          input: {
            itemName: data.itemName,
            category: groupName,
          },
        };
      });
    }
  };

  const handleEditItemIfMatch = () => {
    if (itemMatch) {
      handleEditItem({
        itemName: itemMatch.input.itemName,
      });
    }
  };

  return !itemMatch ? (
    <form onSubmit={handleSubmit(handleEditItemFormSubmit)}>
      <Input
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
        <ErrorMessage>
          <span>{errors.itemName.message}</span>
          <span>
            {errors.itemName.type === "maxLength" &&
              ` ${errors.itemName.ref?.value.length}/40`}
          </span>
        </ErrorMessage>
      )}

      <LongButton
        type="submit"
        disabled={!!errors.itemName || watchItemName === item.itemName}
      >
        Save
      </LongButton>
    </form>
  ) : (
    <ItemMatchModalBody>
      <SmallerParagraph>
        {itemMatch.match[0].item?.itemName} already exists in
      </SmallerParagraph>
      <SmallerParagraph as="ul">
        {itemMatch.match?.map((el) => (
          <SmallerParagraph
            as="li"
            key={nanoid()}
          >{`${el.category}`}</SmallerParagraph>
        ))}
      </SmallerParagraph>
      <SmallerParagraph>
        Do you want to add
        {` ${itemMatch.input?.itemName} `}
        to {`${itemMatch.input?.category}`} anyway?
      </SmallerParagraph>
      <LongButton type="submit" onClick={handleEditItemIfMatch}>
        Yes
      </LongButton>
    </ItemMatchModalBody>
  );
};
export default EditPackingItemModalBody;
