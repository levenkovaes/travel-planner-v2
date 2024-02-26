import React, { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  addItem,
  selectChecklistById,
} from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { LongButton } from "../../../../../shared/ui/button";
import ErrorMessage from "../../../../../shared/ui/error-message";
import Input from "../../../../../shared/ui/input";
import { AddItemModalProps } from "../../types";
import { IFormValues, IItemMatchData } from "./types";
import AddPackingItemFormSelect from "../../../../../entities/add-packing-item-form-select/ui";
import { nanoid } from "@reduxjs/toolkit";
import { findMatch } from "./utils";
import { SmallerParagraph } from "../../../../../shared/ui/typography";
import { ItemMatchModalBody } from "./styled";

const AddPackingItemModalBody: React.FC<AddItemModalProps> = ({
  handleClose,
  selectedGroupName,
}) => {
  const dispatch = useDispatch();
  const { checklistId } = useParams();
  const checklist = useSelector(selectChecklistById(checklistId));

  const [itemMatch, setItemMatch] = useState<false | IItemMatchData>(false);

  const options = useMemo(() => {
    if (checklist) {
      return Object.keys(checklist.categories);
    }
  }, [checklist]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      itemName: "",
      category: selectedGroupName || "-",
    },
  });

  const handleAddItem = ({ itemName, category }: IFormValues) => {
    dispatch(
      addItem({
        item: { itemName: String(itemName), id: nanoid(), isChecked: false },
        category: String(category),
        id: checklistId,
      })
    );

    handleClose();
  };

  const handleAddItemFormSubmit: SubmitHandler<IFormValues> = (data) => {
    if (
      !findMatch(data.itemName, checklist) ||
      findMatch(data.itemName, checklist).length === 0
    ) {
      handleAddItem({
        itemName: data.itemName,
        category: data.category,
      });
    } else {
      setItemMatch({
        match: findMatch(data.itemName, checklist),
        input: {
          itemName: data.itemName,
          category: data.category,
        },
      });
    }
  };

  return !itemMatch ? (
    <form onSubmit={handleSubmit(handleAddItemFormSubmit)}>
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
        placeholder="New item"
        id="item"
        $error={!!errors.itemName}
      />
      {errors.itemName && (
        <ErrorMessage>
          <span>{errors.itemName.message}</span>
          <span>
            {errors.itemName.type === "maxLength" &&
              `${errors.itemName.ref?.value.length}/40`}
          </span>
        </ErrorMessage>
      )}

      {options && (
        <AddPackingItemFormSelect
          control={control}
          name="category"
          options={options}
        />
      )}

      <LongButton
        type="submit"
        disabled={!dirtyFields.itemName || !!errors.itemName}
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
        to {`${itemMatch.input?.category}`}?
      </SmallerParagraph>
      <LongButton
        type="submit"
        onClick={() =>
          handleAddItem({
            itemName: itemMatch.input?.itemName,
            category: itemMatch.input?.category,
          })
        }
      >
        Yes
      </LongButton>
    </ItemMatchModalBody>
  );
};
export default AddPackingItemModalBody;
