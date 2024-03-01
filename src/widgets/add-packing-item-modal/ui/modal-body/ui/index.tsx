import React, { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import AddPackingItemFormSelect from "../../../../../entities/add-packing-item-form-select/ui";
import {
  addItem,
  selectChecklistById,
} from "../../../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { Chip, ChipContainer } from "../../../../../shared/ui/chip";
import ErrorMessage from "../../../../../shared/ui/error-message";
import {
  BoldSpan,
  SmallerParagraph,
} from "../../../../../shared/ui/typography";
import { AddItemModalProps } from "../../types";
import { ItemMatchModalBody } from "./styled";
import { IFormValues, IItemMatchData } from "./types";
import { findMatch } from "./utils";
import {
  ModalButton,
  ModalForm,
  ModalInput,
} from "../../../../../shared/ui/modal/styled";

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

      <ModalButton
        type="submit"
        disabled={!dirtyFields.itemName || !!errors.itemName}
      >
        Save
      </ModalButton>
    </ModalForm>
  ) : (
    <ItemMatchModalBody>
      <SmallerParagraph>
        <BoldSpan>{itemMatch.match[0].item?.itemName}</BoldSpan> already exists
        in
      </SmallerParagraph>
      <ChipContainer as="ul">
        {itemMatch.match?.map((el) => (
          <Chip as="li" key={nanoid()}>{`${el.category}`}</Chip>
        ))}
      </ChipContainer>
      <SmallerParagraph>
        Do you want to add
        <BoldSpan>{` ${itemMatch.input?.itemName} `}</BoldSpan>
        to <BoldSpan>{`${itemMatch.input?.category}`}</BoldSpan>?
      </SmallerParagraph>
      <ModalButton
        type="submit"
        onClick={() =>
          handleAddItem({
            itemName: itemMatch.input?.itemName,
            category: itemMatch.input?.category,
          })
        }
      >
        Yes
      </ModalButton>
    </ItemMatchModalBody>
  );
};
export default AddPackingItemModalBody;
