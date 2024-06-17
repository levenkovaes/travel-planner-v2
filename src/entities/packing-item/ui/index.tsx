import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { nanoid } from "@reduxjs/toolkit";

import {
  checkItem,
  deleteItem,
} from "../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import BlankCheckbox from "../../../shared/ui/assets/icons/check_box_blank.svg";
import CheckedCheckbox from "../../../shared/ui/assets/icons/check_box_checked.svg";
import EditIcon from "../../../shared/ui/assets/icons/edit.svg";
import { TransparentIconButton } from "../../../shared/ui/button";
import { DeleteIconButton } from "../../../shared/ui/button/delete-icon/ui";
import { CustomCheckbox } from "../../../shared/ui/custom-checkbox";
import { SmallerParagraph } from "../../../shared/ui/typography";
import EditPackingItemModal from "../../../widgets/edit-packing-item-modal/ui";
import {
  ItemWrapper,
  PakingItemButtonContainer,
  PakingItemContainer,
} from "./styled";
import { PackingItemProps } from "./types";

export const PakingItem: React.FC<PackingItemProps> = ({ item, groupName }) => {
  const dispatch = useDispatch();
  const { checklistId } = useParams();

  const [isEditItemModalDisplaying, setIsEditItemModalDisplaying] =
    useState(false);

  const openEditItemModal = () => {
    setIsEditItemModalDisplaying(true);
  };

  const closeEditItemModal = () => {
    if (isEditItemModalDisplaying) {
      setIsEditItemModalDisplaying(false);
    }
  };

  const handleCheck = () => {
    dispatch(checkItem({ checklistId, category: groupName, item }));
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
      deleteItem({
        checklistId,
        category: groupName,
        itemId: item.id,
      })
    );
  };

  return (
    <>
      <PakingItemContainer key={nanoid()}>
        <CustomCheckbox onClick={handleCheck}>
          {item.isChecked ? <CheckedCheckbox /> : <BlankCheckbox />}
        </CustomCheckbox>
        <ItemWrapper>
          <SmallerParagraph as="label" htmlFor={item.id} key={item.id}>
            {item.itemName}
          </SmallerParagraph>

          <PakingItemButtonContainer>
            <TransparentIconButton onClick={openEditItemModal}>
              <EditIcon />
            </TransparentIconButton>
            <DeleteIconButton handleClick={handleDeleteItem} />
          </PakingItemButtonContainer>
        </ItemWrapper>
      </PakingItemContainer>

      {isEditItemModalDisplaying && (
        <EditPackingItemModal
          handleClose={closeEditItemModal}
          groupName={groupName}
          item={item}
        />
      )}
    </>
  );
};
