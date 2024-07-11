import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { nanoid } from "@reduxjs/toolkit";

import PakingItem from "../../../entities/packing-item/ui";
import { categoryIsUpdatedReset } from "../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import AddIcon from "../../../shared/ui/assets/icons/add-small.svg";
import AddPackingItemModal from "../../add-packing-item-modal/ui";
import { AddIconContainer, GroupContainer, GroupHeading } from "./styled";
import { PackingItemGroupProps } from "./types";

const PackingItemGroup: React.FC<PackingItemGroupProps> = ({ group }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const dispatch = useDispatch();

  const { checklistId } = useParams();
  const [isAddItemModalDisplaying, setIsAddItemModalDisplaying] =
    useState<boolean>(false);

  const [groupName, { isUpdated, data }] = group;

  const openAddItemModal = (): void => {
    setIsAddItemModalDisplaying(true);
  };

  const closeAddItemModal = (): void => {
    if (isAddItemModalDisplaying) {
      setIsAddItemModalDisplaying(false);
    }
  };

  const handleAddItem: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    openAddItemModal();
  };

  useEffect(() => {
    if (!ref.current || !isUpdated) return;

    ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    dispatch(categoryIsUpdatedReset({ checklistId, categoryName: groupName }));
  }, [checklistId, groupName, isUpdated]);

  return (
    <>
      <GroupContainer ref={ref} key={nanoid()}>
        <GroupHeading>{groupName}</GroupHeading>

        {data.map((item) => (
          <PakingItem key={nanoid()} item={item} groupName={groupName} />
        ))}

        <AddIconContainer onClick={handleAddItem}>
          <AddIcon />
        </AddIconContainer>
      </GroupContainer>

      {isAddItemModalDisplaying && (
        <AddPackingItemModal
          handleClose={closeAddItemModal}
          selectedGroupName={groupName}
        />
      )}
    </>
  );
};

export default PackingItemGroup;
