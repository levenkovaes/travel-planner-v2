import React, { MouseEventHandler, useEffect, useRef, useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { PakingItem } from "../../../entities/packing-item/ui";
import AddPackingItemModal from "../../add-packing-item-modal/ui";
import AddIcon from "./assets/add.svg";
import { AddIconContainer, GroupContainer, GroupHeading } from "./styled";
import { PackingItemGroupProps } from "./types";
import { useDispatch } from "react-redux";
import { categoryIsUpdatedReset } from "../../../pages/packing-checklist/ui/packingChecklistSlice/packingChecklistSlice";
import { useParams } from "react-router-dom";

const PackingItemGroup: React.FC<PackingItemGroupProps> = ({ group }) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const dispatch = useDispatch();

  const { checklistId } = useParams();
  const [isAddItemModalDisplaying, setIsAddItemModalDisplaying] =
    useState(false);

  const [groupName, { isUpdated, data }] = group;

  const openAddItemModal = () => {
    setIsAddItemModalDisplaying(true);
  };

  const closeAddItemModal = () => {
    setIsAddItemModalDisplaying(false);
  };

  const handleAddItem: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    openAddItemModal();
  };

  useEffect(() => {
    if (!ref.current || !isUpdated) return;

    ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
    dispatch(categoryIsUpdatedReset({ checklistId, categoryName: groupName }));
  }, [isUpdated]);

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
